"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
        sparse: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    is_validate_user: {
        time_expire: {
            type: Number,
            default: Date.now() + 5 * 60 * 1000
        },
        otp: {
            type: Number
        },
        is_checked: {
            type: Boolean,
            default: false
        }
    }
});
exports.default = (0, mongoose_1.model)('user', UserSchema);
