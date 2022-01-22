import { body } from "express-validator";

export const validateOTP = [
    body('otp').isLength({max: 4, min: 4}).withMessage('otp is not valid, must have 4 numbers'),
]

