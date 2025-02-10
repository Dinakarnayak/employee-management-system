// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);  // Log the error for debugging

  // Respond with a generic error message
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
