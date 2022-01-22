"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCors = void 0;
var useCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
};
exports.useCors = useCors;
