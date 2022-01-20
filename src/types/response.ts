export interface ResponseService<T extends Object> {
    message: string;
    code: number;
    result: T
}