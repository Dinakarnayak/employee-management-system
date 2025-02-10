// src/middleware/loggingMiddleware.ts
import { Request, Response, NextFunction } from 'express';

const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} request to ${req.url}`);
  next();  // Pass control to the next middleware/route handler
};

export default loggingMiddleware;
