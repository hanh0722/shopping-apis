import { Router } from "express";
import { LOGIN, REGISTER, CHECKING_OTP_REGISTER } from "../../constants/auth";
import { CheckOTPRegister, LoginUser } from "../controller/auth";
import { RegisterUser } from "../controller/user";
import { validateOTP } from "../validation/auth-validate";
import { validateLogin, validateRegister } from "../validation/user-validation";

const router = Router();

router.post(REGISTER, validateRegister ,RegisterUser);

router.post(LOGIN, validateLogin, LoginUser);

router.post(CHECKING_OTP_REGISTER, validateOTP ,CheckOTPRegister);

export default router;