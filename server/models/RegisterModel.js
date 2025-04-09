const mongoose = require("mongoose");

// Schema for storing user data
const RegisterSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Model/colllection for storing user data
const RegisterModel = mongoose.model("register_data", RegisterSchema);

module.exports = RegisterModel;
