import { NextFunction, Request, Response } from "express";

export type ErrorRequestHandler<T> = (err: T, req: Request, res: Response, next: NextFunction) => void;

export interface ErrorMessage {
    code?: number;
    message?: string;
}