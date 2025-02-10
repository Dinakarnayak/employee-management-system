// src/middleware/authenticateJWT.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  // Get the token from the Authorization header
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  
  // Remove the 'Bearer ' prefix
  const token = authHeader.replace('Bearer ', '');
  
  try {
    // Verify the token using the secret key and cast it as JwtPayload
    const decoded = jwt.verify(token, config.secretKey) as jwt.JwtPayload;
    
    // Check that the decoded token contains a 'username' property
    if (!decoded.username) {
      return res.status(400).json({ message: 'Invalid token: Missing username.' });
    }
    
    // (Optional) If you wish, you can attach decoded data to req (e.g., req.user)
    // req.user = { username: decoded.username };

    next();  // Token is valid—continue to the next middleware or route handler
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export default authenticateJWT;
