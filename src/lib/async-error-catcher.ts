import { RequestHandler, Request, Response, NextFunction } from "express";

export default function wrap(f: RequestHandler): RequestHandler {
  return async function(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      return await f(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}
