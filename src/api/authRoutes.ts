// src/api/authRoutes.ts
import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { config } from '../config/config';

const router = Router();

// Dummy user data (replace with database query in production)
const users = [
  {
    username: 'admin',
    password: '$2b$10$sdJKsdfHfjsdlfkjsdT8Gjs3j21uVfjmQ3F2xt1.E24/v3V6Pyu9S', // hashed 'password'
  },
];

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  console.log('Received username:', username);
  console.log('Received password:', password);

  const user = users.find((user) => user.username === username);

  if (!user) {
    console.log('User not found');
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  console.log('User found:', user);

  const isMatch = await bcrypt.compare(password, user.password);
  console.log('Password match:', isMatch);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, config.secretKey, { expiresIn: '1h' });
  console.log('Generated token:', token);
  
  return res.status(200).json({ token });
});

export default router;
