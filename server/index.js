const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RegisterModel = require("./models/RegisterModel");

const app = express();

// Enhanced CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend URL
  credentials: true, // Allow cookies/sessions
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));

app.use(express.json());

// Database connection with error handling
mongoose
  .connect("mongodb://127.0.0.1:27017/petparadise_db")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User registration
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already registered" });
    }

    // Create new user (NOTE: In production, hash passwords!)
    const newUser = await RegisterModel.create({ name, email, password });

    // Return user data without password
    const { password: _, ...userData } = newUser.toObject();
    res.status(201).json(userData);
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// User login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await RegisterModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Compare passwords (NOTE: In production, use bcrypt!)
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Return user data without password
    const { password: _, ...userData } = user.toObject();
    res.json({
      status: "success",
      user: userData,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get user data
app.get("/user", async (req, res) => {
  try {
    const { email } = req.query;
    const user = await RegisterModel.findOne({ email }).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("User data error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
