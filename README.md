📌 Employee Management System
A Node.js + TypeScript backend API for managing employees, built with Express.js and MongoDB.

🚀 Features
✔️ CRUD Operations (Create, Read, Update, Delete Employees)
✔️ MongoDB with Mongoose for database management
✔️ Role-Based Access Control (RBAC) (Optional)
✔️ DTO Validation using Joi
✔️ Public & Private Routes

🛠 Tech Stack
Backend: Node.js, Express.js, TypeScript
Database: MongoDB, Mongoose
Validation: Joi
Authentication: JWT (Optional)
Logging: Winston
📦 Installation
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/Dinakarnayak/employee-management-system.git
cd employee-management-system
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Start the server

bash
Copy
Edit
npm run dev
✅ Server runs at: http://localhost:5000

📌 API Endpoints
Method	Endpoint	Description
POST	/api/employees	Add a new employee
GET	/api/public/employees	Get all employees (public)
GET	/api/employees/:id	Get a single employee
PUT	/api/employees/:id	Update an employee
DELETE	/api/employees/:id	Delete an employee


🚀 Contribute
Fork the repo
Create a new branch (git checkout -b feature-name)
Commit changes (git commit -m "Added feature")
Push and create a Pull Request
🔗 Connect with Me
💼 LinkedIn: Dinakar Nayak
📂 GitHub: Dinakarnayak

