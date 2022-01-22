"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOTP = void 0;
var express_validator_1 = require("express-validator");
exports.validateOTP = [
    (0, express_validator_1.body)('otp').isLength({ max: 4, min: 4 }).withMessage('otp is not valid, must have 4 numbers'),
];
