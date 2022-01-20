"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResolveErrorHandling = function (err, req, res, next) {
    var message = (err === null || err === void 0 ? void 0 : err.message) || "Server Internal Error";
    var code = (err === null || err === void 0 ? void 0 : err.code) || 500;
    return res.status(code).json({
        message: message,
        code: code,
    });
};
exports.default = ResolveErrorHandling;
