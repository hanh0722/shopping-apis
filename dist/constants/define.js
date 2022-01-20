"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEX_PASSWORD = exports.SALT_ROUND = void 0;
exports.SALT_ROUND = 10;
exports.REGEX_PASSWORD = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
