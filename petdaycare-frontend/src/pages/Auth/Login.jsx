import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      setErrorMessage("⚠️ Please enter both email and password.");
      return;
    }
    setErrorMessage("");
    navigate("/dashboard");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-200 to-purple-300 p-4">
      <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden w-full h-[80vh] max-w-4xl transition-all duration-500 ease-in-out">
        {/* Image Section */}
        <div className="hidden md:flex lg:w-1/2 md:w-[45%] items-center justify-center  bg-white rounded-l-xl h-full">
          <img
            src="https://i.pinimg.com/736x/e3/11/90/e31190096b08e2ed1e2edd5734125f24.jpg"
            alt="Happy dog with owner"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-purple-100 to-purple-100 relative">
          {/* Back Arrow */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 text-purple-800 hover:text-purple-900 flex items-center gap-2 z-10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <h1 className="text-3xl font-bold text-purple-700 mb-2 text-center">
            Login
          </h1>
          <p className="text-lg font-semibold text-purple-500 mb-6 uppercase animate-pulse text-center">
            "Welcome back to Pet Paradise!"
          </p>

          {errorMessage && (
            <p className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded-md mb-4">
              {errorMessage}
            </p>
          )}

          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              autoComplete="current-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <button
            onClick={handleLogin}
            className="mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg hover:from-purple-700 hover:to-purple-900 transition duration-300"
          >
            Login
          </button>

          <p className="text-sm text-gray-500 mt-4 hover:text-purple-600 cursor-pointer text-center">
            Forgot your password?
          </p>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-purple-600 font-bold cursor-pointer hover:underline"
            >
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
