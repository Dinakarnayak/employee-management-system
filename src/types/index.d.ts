// src/types/index.d.ts

declare namespace Express {
    export interface Request {
      user?: { username: string };  // Extend the Request interface with the 'user' object
    }
  }
  