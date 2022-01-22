import { model, Schema } from "mongoose";
import { UserRequest } from "../types/user";

const UserSchema = new Schema<UserRequest>({
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
})

export default model<UserRequest>('user', UserSchema);