"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createError = void 0;
var createError = function (message, code) {
    var error = new Error();
    error.code = code || 500;
    error.message = message || "Server Internal Error";
    throw error;
};
exports.createError = createError;
