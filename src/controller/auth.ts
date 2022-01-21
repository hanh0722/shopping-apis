import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/user";
import { createError } from "../../utils/error";
import { UserRequest } from "../types/user";
import { responseErrorService, responseSuccessService } from "../../utils/handling-response";
import { SECRET_KEY } from "../../constants/auth";

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
    const user = await User.findOne({ username: username });
    const passwordUser = user!.password;
    const passwordIsValid = await bcrypt.compare(password, passwordUser);
    if (!passwordIsValid) {
      createError("password is not matched", 406);
    }
    const timeExpired = Date.now() + 12 * 60 * 60 * 1000

    const token = jwt.sign({
        _id: user?._id,
        username: user?.username,
        email: user?.email
    }, SECRET_KEY, {
      expiresIn: timeExpired
    });
    return responseSuccessService(res, 200, 'successfully', {
        token: token,
        timeExpired: timeExpired
    });
  } catch (err) {
    next(err);
  }
};


