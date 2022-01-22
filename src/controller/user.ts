import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../model/user";
import { UserRequest } from "../types/user";
import { SALT_ROUND } from "../../constants/define";
import {
  responseErrorService,
  responseSuccessService,
} from "../../utils/handling-response";
import { sendMailToUser, generateOTP } from "../../utils/send-email";

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
    const randomNumber = generateOTP();
    const user = new User({
      username: username,
      password: hash,
      phone: phone,
      email: email,
      is_validate_user: {
        time_expire: Date.now() + 5 * 60 * 1000,
        otp: randomNumber,
        is_checked: false,
      },
    });
    await user.save();
    const result = await sendMailToUser(
      email!,
      `<h1 style="text-align: center; color: red; padding: 10px">Thank you for register our service</h1><p style="text-align: center">Your OTP: ${randomNumber}</p>`,
      "OTP for register our service"
    );
    return responseSuccessService(res, 200, "successfully", {
      message: `OTP has been sent to email: ${email}`
    });
  } catch (err: any) {
    next(err);
  }
};
