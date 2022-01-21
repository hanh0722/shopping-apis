import { ErrorRequestHandler, ErrorMessage } from "../types/error-handling";

const ResolveErrorHandling: ErrorRequestHandler<ErrorMessage> = (
  err,
  req,
  res,
  next
) => {
  const message = err.message || "Server Internal Error";
  const code = err.code || 500;
  console.log(message);
  res.status(code).json({
    message: message,
    code: code,
  });
};

export default ResolveErrorHandling;
