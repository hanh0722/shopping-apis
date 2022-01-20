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
})

export default model<UserRequest>('user', UserSchema);