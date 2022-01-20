"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseSuccessService = exports.responseErrorService = void 0;
var responseErrorService = function (res, code, message, propsError) {
    return res.status(code || 500).json({
        message: message,
        code: code,
        error: propsError
    });
};
exports.responseErrorService = responseErrorService;
var responseSuccessService = function (res, code, message, propsSuccess) {
    return res.status(code || 200).json({
        message: message,
        code: code,
        result: propsSuccess
    });
};
exports.responseSuccessService = responseSuccessService;
