import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const quotes = [
    "Every pet deserves a loving home!",
    "Adopt, don’t shop!",
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
    let newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!emailPattern.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (validateForm()) {
      setSuccessMessage("🎉 Account created successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src="https://shorturl.at/kOPeh" alt="Training a Dog" />
      </div>

      <div className="signup-form">
        <h1>Create Account</h1>
        <p className="quote-text">{currentQuote}</p>

        {successMessage ? (
          <p className="success-message">{successMessage}</p>
        ) : (
          <>
            <div className="signup-fields">
              <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} />
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}

              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} />
              {errors.email && <p className="error-message">{errors.email}</p>}

              <input type="password" name="password" placeholder="Create Password" onChange={handleChange} />
              {errors.password && <p className="error-message">{errors.password}</p>}

              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>

            <button onClick={handleSignup}>Sign Up</button>

            <p className="signup-login">
              Already have an account?{" "}
              <span onClick={() => navigate("/login")} className="login-link">
                Login here
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;
