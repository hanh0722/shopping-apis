import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../model/user";
import { UserRequest } from "../types/user";
import { SALT_ROUND } from "../../constants/define";
import { responseErrorService, responseSuccessService } from "../../utils/handling-response";

export const RegisterUser: RequestHandler = async (req, res, next) => {
  const { username, password, phone, email } = req.body as UserRequest;
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
    const hash = await bcrypt.hash(password, SALT_ROUND);
    // const index = User.
    const user = new User({
      username: username,
      password: hash,
      phone: phone,
      email: email
    });
    await user.save();
    return responseSuccessService(res, 200, "successfully", user);
  } catch (err: any) {
    next(err);
  }
};
