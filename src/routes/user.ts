import { Router } from "express";
import { RegisterUser } from "../controller/user";
import { validateRegister } from "../validation/user-validation";

const router = Router();

router.post('/register', validateRegister ,RegisterUser);

export default router;