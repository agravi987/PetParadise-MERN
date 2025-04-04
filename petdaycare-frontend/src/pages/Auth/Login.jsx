import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

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
    <div className="login-container">
      <div className="login-content">
        <div className="login-image">
          <img 
            src="https://i.pinimg.com/736x/e3/11/90/e31190096b08e2ed1e2edd5734125f24.jpg" 
            alt="Happy dog with owner" 
          />
        </div>

        <div className="login-form">
          <h1>Login</h1>
          <p className="quote-text">"WELCOME BACK TO PET PARADISE!"</p>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="login-fields">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              onChange={handleChange} 
              autoComplete="email"
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handleChange} 
              autoComplete="current-password"
            />
          </div>

          <button onClick={handleLogin}>Login</button>

          <p className="loginsignup-forgot">Forgot your password?</p>

          <p className="loginsignup-signup">
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} className="signup-link">
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;