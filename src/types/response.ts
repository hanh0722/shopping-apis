import { UserRequest } from "./user";

export interface ResponseService<T extends Object> {
    message: string;
    code: number;
    result: T
}

export interface OTPResponse<T extends string | number> extends UserRequest {
    otp: T
}