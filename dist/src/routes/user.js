"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_1 = require("../controller/user");
var user_validation_1 = require("../validation/user-validation");
var router = (0, express_1.Router)();
router.post('/register', user_validation_1.validateRegister, user_1.RegisterUser);
exports.default = router;
