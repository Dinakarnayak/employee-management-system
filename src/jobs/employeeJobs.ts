import cron from 'node-cron';

// Job to send daily reminders or reports for employees
cron.schedule('0 0 9 * * *', () => {
  console.log('Sending daily employee reminder...');
  // Here, you could add logic to send reminders to employees via email, etc.
});
