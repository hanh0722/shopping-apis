import { ErrorMessage } from "./types/error-handling";

export const createError = (message?: string, code?: number) => {
    const error: ErrorMessage = new Error();
    error.code = code || 500;
    error.message = message || "Server Internal Error";
    throw error;
}