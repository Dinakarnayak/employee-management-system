import mongoose, { Schema, Document } from "mongoose";
import { IEmployee } from "../interfaces/Employee";  // Importing the separate interface

const EmployeeSchema = new Schema<IEmployee & Document>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    department: { type: String, required: true },
    date_of_joining: { type: Date, required: true },
  },
  { timestamps: true } // Adds createdAt & updatedAt
);

export default mongoose.model<IEmployee & Document>("Employee", EmployeeSchema);
