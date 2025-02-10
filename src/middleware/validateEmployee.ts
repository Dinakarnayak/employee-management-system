// src/middleware/validateEmployee.ts
import { Request, Response, NextFunction } from 'express';

const validateEmployee = (req: Request, res: Response, next: NextFunction) => {
  const { name, position, salary, email, department, date_of_joining } = req.body;

  // Check if all required fields are provided
  if (!name || !position || !salary || !email || !department || !date_of_joining) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Optionally: Check for specific field formats (e.g., email format)
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // If validation passes, proceed to the next middleware or route handler
  next();
};

export default validateEmployee;
