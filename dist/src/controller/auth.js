"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckOTPRegister = exports.LoginUser = void 0;
var express_validator_1 = require("express-validator");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var user_request_1 = require("../../utils/user-request");
var error_1 = require("../../utils/error");
var handling_response_1 = require("../../utils/handling-response");
var auth_1 = require("../../constants/auth");
var LoginUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, validateUser, user, passwordUser, passwordIsValid, timeExpired, token, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, username = _a.username, password = _a.password;
                validateUser = (0, express_validator_1.validationResult)(req);
                if (!validateUser.isEmpty()) {
                    return [2 /*return*/, (0, handling_response_1.responseErrorService)(res, 422, "not successfully", validateUser.array())];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, user_request_1.findUserByCondition)(auth_1.USERNAME, username, next)];
            case 2:
                user = _b.sent();
                passwordUser = user.password;
                return [4 /*yield*/, bcrypt_1.default.compare(password, passwordUser)];
            case 3:
                passwordIsValid = _b.sent();
                if (!passwordIsValid) {
                    (0, error_1.createError)("password is not matched", 406);
                }
                timeExpired = Date.now() + 12 * 60 * 60 * 1000;
                token = jsonwebtoken_1.default.sign({
                    _id: user === null || user === void 0 ? void 0 : user._id,
                    username: user === null || user === void 0 ? void 0 : user.username,
                    email: user === null || user === void 0 ? void 0 : user.email,
                }, auth_1.SECRET_KEY, {
                    expiresIn: timeExpired,
                });
                return [2 /*return*/, (0, handling_response_1.responseSuccessService)(res, 200, "successfully", {
                        token: token,
                        timeExpired: timeExpired,
                    })];
            case 4:
                err_1 = _b.sent();
                next(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.LoginUser = LoginUser;
var CheckOTPRegister = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, otpUser, username, validation, user, _b, otp, is_checked, time_expire, err_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, otpUser = _a.otp, username = _a.username;
                validation = (0, express_validator_1.validationResult)(req);
                if (!validation.isEmpty()) {
                    (0, handling_response_1.responseErrorService)(res, 422, "otp is not valid", validation.array());
                }
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, (0, user_request_1.findUserByCondition)(auth_1.USERNAME, username, next)];
            case 2:
                user = _c.sent();
                if (!user) {
                    (0, error_1.createError)("user is not existed", 404);
                }
                _b = user.is_validate_user, otp = _b.otp, is_checked = _b.is_checked, time_expire = _b.time_expire;
                if (is_checked) {
                    (0, error_1.createError)("user is validated", 403);
                }
                else if (Date.now() > time_expire) {
                    (0, error_1.createError)("otp is expired", 400);
                }
                else if (otp !== otpUser) {
                    (0, error_1.createError)("otp is not matched", 422);
                }
                user.is_validate_user.otp = undefined;
                user.is_validate_user.time_expire = undefined;
                user.is_validate_user.is_checked = true;
                return [4 /*yield*/, (user === null || user === void 0 ? void 0 : user.save())];
            case 3:
                _c.sent();
                (0, handling_response_1.responseSuccessService)(res, 200, "successfully");
                return [3 /*break*/, 5];
            case 4:
                err_2 = _c.sent();
                next(err_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.CheckOTPRegister = CheckOTPRegister;
