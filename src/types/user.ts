export interface ValidateUser {
    otp: number | undefined,
    time_expire?: number | undefined,
    is_checked?: boolean
}

export interface UserRequest {
    username: string;
    email: string;
    password: string;
    phone: string,
    is_validate_user?: ValidateUser
}

