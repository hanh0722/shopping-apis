"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResolveErrorHandling = function (err, req, res, next) {
    var message = err.message || "Server Internal Error";
    var code = err.code || 500;
    console.log(message);
    res.status(code).json({
        message: message,
        code: code,
    });
};
exports.default = ResolveErrorHandling;
