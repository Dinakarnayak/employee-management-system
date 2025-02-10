// generateHash.ts
import bcrypt from 'bcrypt';

// Function to hash a plain password
const hashPassword = async (plainPassword: string) => {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    console.log('Hashed password:', hashedPassword);
  } catch (err) {
    console.error('Error hashing password:', err);
  }
};

// Example usage
hashPassword('password');  // Replace 'password' with any password you want to hash
