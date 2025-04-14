import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const quotes = [
    "Every pet deserves a loving home!",
    "Adopt, don't shop!",
    "A house is not a home without a pet.",
    "Pets make our lives whole.",
    "Furry friends, endless love!",
  ];
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 3000);
    return () => clearInterval(quoteInterval);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!emailPattern.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (formData.password.length < 8) newErrors.password = "Min 8 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:3001/register", {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      alert("🎉 Registered successfully!");
      navigate("/login");
    } catch (error) {
      setErrors({
        general:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-purple-300 py-10">
      <div className="flex flex-col md:flex-row justify-center items-stretch max-w-5xl w-[90%] mx-auto bg-white/30 rounded-xl backdrop-blur-lg overflow-hidden h-[80vh] relative">
        {/* Image */}
        <div className="hidden md:flex w-full md:w-[45%] items-center justify-center bg-white rounded-l-xl h-full">
          <img
            src="https://shorturl.at/QTceD"
            alt="Woman training her dog"
            className="w-full h-full object-cover rounded-l-xl"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-[55%] p-8 bg-gradient-to-br from-purple-100 to-purple-100 flex flex-col justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 text-purple-800 hover:text-purple-900 flex items-center gap-2 z-10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>

          <h1 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
            Create Account
          </h1>

          <p className="italic text-center text-purple-700 mt-2">
            "{currentQuote}"
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg outline-none focus:border-purple-500"
              />
              {errors.fullName && (
                <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg outline-none focus:border-purple-500"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg outline-none focus:border-purple-500"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg outline-none focus:border-purple-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={handleSignup}
            className="mt-6 w-full py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-purple-800">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="font-bold text-purple-600 cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>

          {errors.general && (
            <p className="text-red-600 text-center mt-4 font-medium">
              {errors.general}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
