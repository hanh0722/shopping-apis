"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateErrorMessage = function (message, code) {
    var errorMessage = {
        code: code || 500,
        message: message || "Server Internal Error"
    };
    return errorMessage;
};
exports.default = generateErrorMessage;
