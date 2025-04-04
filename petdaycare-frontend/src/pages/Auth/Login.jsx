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
            src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
            />
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handleChange} 
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