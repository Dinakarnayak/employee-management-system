import dotenv from "dotenv";
dotenv.config();

export const config = {
  db: {
    mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mydb",  // ✅ Add this property
  },
  server: {
    port: process.env.PORT || 5000,
  },
};
