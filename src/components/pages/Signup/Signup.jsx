import React, { useState } from "react";
import "./Signup.css";
import { FaArrowLeft } from "react-icons/fa";

function Signup({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "student",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // Logic for registration
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <header className="signup-header">
          <div className="logo-section">
             <img src="/assets/logo3.png" alt="SmartEdu Logo" />
          </div>
          <button className="back-arrow" onClick={() => onNavigate("learn")}>
            <FaArrowLeft />
          </button>
        </header>

          <div className="welcome-section">
          <h1>Let's Get you Started</h1>
        <p className="login-prompt">
          Already Have an Account? <a 
            href="#" 
            className="login-link" 
            onClick={(e) => { e.preventDefault(); onNavigate("login"); }}
          >
            Login
          </a>
        </p>
        </div>

        <footer className="signup-footer">
          © 2026 <span className="footer-brand">SmartEdu</span>. All Rights Reserved
        </footer>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="form-card">
          <h2>Sign Up</h2>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row radio-group">
              <label>Sign up as:</label>
              <div className="radio-options">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={formData.role === "student"}
                    onChange={handleChange}
                  />
                  <span>Student</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="role"
                    value="parent"
                    checked={formData.role === "parent"}
                    onChange={handleChange}
                  />
                  <span>Parent/Guardian</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="role"
                    value="tutor"
                    checked={formData.role === "tutor"}
                    onChange={handleChange}
                  />
                  <span>Tutor</span>
                </label>
              </div>
            </div>

            <div className="form-row">
              <label>E-mail:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label>Date of Birth:</label>
              <input
                type="text"
                name="dob"
                placeholder="15/12/1999"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
