const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Importing CORS for cross-origin resource sharing
const RegisterModel = require("./models/RegisterModel");

// Creating an Express app
const app = express();

// Middleware to parse JSON and enable CORS
app.use(express.json());
app.use(cors());

// Connecting to MongoDB database without deprecated options
mongoose
  .connect("mongodb://127.0.0.1:27017/petparadise_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// POST request to login a user
app.post("/login", (req, res) => {
  const { email, password } = req.body; // Destructuring email and password from request body
  // Using Mongoose to find a user with the email and password
  RegisterModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          console.log("User logged in:", user);
          res.status(200).json("success"); // Respond with the user data and status 200
        } else {
          console.log("Invalid password");
          res.status(401).json({ error: "Unauthorized" }); // Respond with status 401 and error message
        }
      }
    })
    .catch((err) => {});
});

// POST request to register a user
app.post("/register", (req, res) => {
  // Using Mongoose to create a new document in the database
  RegisterModel.create(req.body)
    .then((data) => {
      res.status(201).json(data); // Respond with the created user data and status 201
    })
    .catch((err) => {
      console.error("Error during user registration:", err); // Log error if creation fails
      res.status(500).json({ error: "Internal Server Error" }); // Respond with status 500 and error message
    });
});

// Starting the server on port 3001
app.listen(3001, () => {
  console.log("Server is running on port 3001, URL: http://localhost:3001"); // Log server start message
});
