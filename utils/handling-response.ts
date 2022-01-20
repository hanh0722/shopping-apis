import { Response } from "express"

const responseErrorService = <T>(res: Response, code: number, message: string, propsError?: T) => {
    return res.status(code || 500).json({
        message: message,
        code: code,
        error: propsError
    })
}

const responseSuccessService = <T>(res: Response, code: number, message: string, propsSuccess?: T) => {
    return res.status(code || 200).json({
        message: message,
        code: code,
        result: propsSuccess
    })
}
export {
    responseErrorService,
    responseSuccessService
}
