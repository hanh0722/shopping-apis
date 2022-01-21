import { Router } from "express";
import { LOGIN, REGISTER } from "../../constants/auth";
import { LoginUser } from "../controller/auth";
import { RegisterUser } from "../controller/user";
import { validateLogin, validateRegister } from "../validation/user-validation";

const router = Router();

router.post(REGISTER, validateRegister ,RegisterUser);

router.post(LOGIN, validateLogin, LoginUser);

export default router;