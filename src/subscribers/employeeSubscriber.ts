import { EventEmitter } from 'events';

class EmployeeSubscriber extends EventEmitter {
  notifyEmployeeCreated(employeeId: number) {
    this.emit('employeeCreated', employeeId);
  }

  notifyEmployeeUpdated(employeeId: number) {
    this.emit('employeeUpdated', employeeId);
  }
}

const employeeSubscriber = new EmployeeSubscriber();

// Example: Subscribe to employee creation events
employeeSubscriber.on('employeeCreated', (employeeId) => {
  console.log(`New employee created with ID: ${employeeId}`);
});

export default employeeSubscriber;
