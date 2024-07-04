import { NextFunction, Request, Response } from "express";

export const exceptionHandlerMiddleware = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  return res.status(500).json({
    error: (error as Error).message,
  });
};
