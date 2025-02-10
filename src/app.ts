import express from 'express';
import dotenv from 'dotenv';
import loggingMiddleware from './middleware/loggingMiddleware';
import { databaseLoader } from './loaders/databaseLoader';
import { cronLoader } from './loaders/cronLoader';
import employeeRoutes from './api/employeeRoutes';
import authRoutes from './api/authRoutes';
import errorHandler from './middleware/errorHandler';  // Import global error handler

dotenv.config();

const app = express();
app.use(express.json());

// Use logging middleware
app.use(loggingMiddleware);

// API routes
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);

// Global error handler
app.use(errorHandler);

// Root route - Send custom message
app.get('/', (req, res) => {
  res.send('Welcome to the Employee Management System API!');
  // This will send a welcome message when someone accesses the root URL of the server
});

// Server initialization
const startServer = async () => {
  try {
    console.log('Initializing server...');  // Log server initialization
    await databaseLoader();  // Initialize DB
    console.log('Database initialized successfully.');
    cronLoader();  // Initialize cron jobs
    console.log('Cron jobs initialized successfully.');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);  // Log when server starts listening
    });
  } catch (error) {
    console.error('Error during server initialization:', error);  // Error handling during initialization
  }
};

startServer();
