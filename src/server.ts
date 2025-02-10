import express from "express";
import connectDB from "./config/database";
import employeeRoutes from "./api/employeeRoutes";

const app = express();

// Middleware
app.use(express.json());

// ✅ Ensure API routes are correctly loaded
app.use("/api", employeeRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
