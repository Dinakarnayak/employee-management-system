import cron from 'node-cron';
import logger from '../utils/logger';

// Example: Cron job for sending daily reminders or reports
cron.schedule('0 0 9 * * *', () => {
  logger.info('Running daily cron job: Sending employee reminders...');
  // Your logic here to send daily reminders to employees or any other tasks
});

// Example: Cron job for generating reports every Sunday at 8:00 AM
cron.schedule('0 8 * * 0', () => {
  logger.info('Running weekly cron job: Generating employee reports...');
  // Your logic here to generate reports
});

export const cronLoader = () => {
  // All cron jobs will be initialized when this loader is called
  logger.info('Cron jobs loaded successfully');
};
