import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/user.router.js";

dotenv.config();

const app = express();

// CORS 
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://resetpassflow.netlify.app",
    ],
    credentials: true,
  })
);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// routes
app.use("/api/auth", authRoutes);

// port
const PORT = process.env.PORT || 5000;

// connect DB
connectDB();

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
