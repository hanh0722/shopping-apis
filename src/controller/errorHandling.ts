import { ErrorRequestHandler, ErrorMessage } from "../types/error-handling";

const ResolveErrorHandling: ErrorRequestHandler<ErrorMessage> = (
  err,
  req,
  res,
  next
) => {
  const message = err?.message || "Server Internal Error";
  const code = err?.code || 500;
  return res.status(code).json({
    message: message,
    code: code,
  });
};

export default ResolveErrorHandling;
