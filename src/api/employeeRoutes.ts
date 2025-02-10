import { Router, Request, Response } from "express";
import EmployeeService from "../services/EmployeeService";
import Joi from "joi";  // Import Joi for inline DTO validation

const router = Router();

// ✅ Inline DTO Validation Schema (No separate DTO file)
const employeeSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  position: Joi.string().min(2).max(50).required(),
  salary: Joi.number().positive().required(),
  department: Joi.string().min(2).max(50).required(),
  date_of_joining: Joi.date().required(),
});

// ✅ Public Route: Get All Employees
router.get("/public/employees", async (req: Request, res: Response) => {
  try {
    const employees = await EmployeeService.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// ✅ Get a Single Employee
router.get("/employees/:id", async (req: Request, res: Response) => {
  try {
    const employee = await EmployeeService.getEmployeeById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// ✅ Create Employee
router.post("/employees", async (req: Request, res: Response) => {
  const { error } = employeeSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const newEmployee = await EmployeeService.createEmployee(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// ✅ Update Employee
router.put("/employees/:id", async (req: Request, res: Response) => {
  try {
    const updatedEmployee = await EmployeeService.updateEmployee(req.params.id, req.body);
    res.json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

// ✅ Delete Employee
router.delete("/employees/:id", async (req: Request, res: Response) => {
  try {
    await EmployeeService.deleteEmployee(req.params.id);
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
