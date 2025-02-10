import Employee from "../models/Employee";

class EmployeeService {
  // ✅ Get all employees
  static async getAllEmployees() {
    return await Employee.find();
  }

  // ✅ Get an employee by ID
  static async getEmployeeById(id: string) {
    return await Employee.findById(id);
  }

  // ✅ Create a new employee
  static async createEmployee(data: any) {
    const newEmployee = new Employee(data);
    return await newEmployee.save();
  }

  // ✅ Update an existing employee
  static async updateEmployee(id: string, data: any) {
    return await Employee.findByIdAndUpdate(id, data, { new: true });
  }

  // ✅ Delete an employee
  static async deleteEmployee(id: string) {
    return await Employee.findByIdAndDelete(id);
  }
}

export default EmployeeService;
