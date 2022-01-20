import { ErrorMessage } from "./types/error-handling";

const generateErrorMessage = (message: string, code: number) => {
    const errorMessage: ErrorMessage = {
        code: code || 500,
        message: message || "Server Internal Error"
    };

    return errorMessage;
}

export default generateErrorMessage;