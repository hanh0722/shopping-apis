import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {
  findUserByCondition,
  getUserByMultipleCondition,
} from "../../utils/user-request";
import { createError } from "../../utils/error";
import { UserRequest } from "../types/user";
import {
  responseErrorService,
  responseSuccessService,
} from "../../utils/handling-response";
import { SECRET_KEY, USERNAME } from "../../constants/auth";
import { OTPResponse } from "../types/response";

export const LoginUser: RequestHandler = async (req, res, next) => {
  const { username, password } = req.body as UserRequest;
  const validateUser = validationResult(req);
  if (!validateUser.isEmpty()) {
    return responseErrorService(
      res,
      422,
      "not successfully",
      validateUser.array()
    );
  }
  try {
    const user = await findUserByCondition(USERNAME, username, next);
    const passwordUser = user!.password;
    const passwordIsValid = await bcrypt.compare(password, passwordUser);
    if (!passwordIsValid) {
      createError("password is not matched", 406);
    }
    const timeExpired = Date.now() + 12 * 60 * 60 * 1000;

    const token = jwt.sign(
      {
        _id: user?._id,
        username: user?.username,
        email: user?.email,
      },
      SECRET_KEY,
      {
        expiresIn: timeExpired,
      }
    );
    return responseSuccessService(res, 200, "successfully", {
      token: token,
      timeExpired: timeExpired,
    });
  } catch (err) {
    next(err);
  }
};

export const CheckOTPRegister: RequestHandler = async (req, res, next) => {
  const { otp: otpUser, username } = req.body as OTPResponse<number>;
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    responseErrorService(res, 422, "otp is not valid", validation.array());
  }
  try {
    const user = await findUserByCondition(USERNAME, username, next);
    if (!user) {
      createError("user is not existed", 404);
    }

    let { otp, is_checked, time_expire } = user!.is_validate_user!;
    if (is_checked) {
      createError("user is validated", 403);
    } else if (Date.now() > time_expire!) {
      createError("otp is expired", 400);
    } else if (otp !== otpUser) {
      createError("otp is not matched", 422);
    }
    user!.is_validate_user!.otp = undefined;
    user!.is_validate_user!.time_expire = undefined;
    user!.is_validate_user!.is_checked = true;
    await user?.save();
    responseSuccessService(res, 200, "successfully");
  } catch (err) {
    next(err);
  }
};
