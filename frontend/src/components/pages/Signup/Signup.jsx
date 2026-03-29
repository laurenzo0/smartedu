import React, { useState } from "react";
import "./Signup.css";
import { FaArrowLeft } from "react-icons/fa";
import { registerUser, loginUser } from "../../../services/api";
import { useUser } from "../../../contexts/UserContext";

function Signup({ onNavigate }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    role: "student",
    email: "",
    date_of_birth: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      // Step 1: Register user in the database
      await registerUser(formData);

      // Step 2: Auto-login to get the JWT token so we can go straight to the dashboard
      const token = await loginUser({ email: formData.email, password: formData.password });
      login(token); // Store in context + localStorage

      if (formData.role === "parent") {
        onNavigate("parent-dashboard");
      } else {
        onNavigate("dashboard");
      }
    } catch (err) {
      // If rate-limited or server error, allow access with a warning
      const isServerIssue = err.message?.includes("429") || err.message?.includes("500") || err.message?.includes("503");
      if (isServerIssue) {
        setError("Backend is temporarily unavailable. Proceeding in demo mode.");
        setTimeout(() => {
          if (formData.role === "parent") {
            onNavigate("parent-dashboard");
          } else {
            onNavigate("dashboard");
          }
        }, 1500);
      } else {
        setError(err.message || "Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <header className="signup-header">
          <div className="logo-section">
             <img src="frontend/src/assets/logo2.png" alt="SmartEdu Logo" />
          </div>
          <button className="back-arrow" onClick={() => onNavigate("landing")}>
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
          
          {error && <div className="signup-error">{error}</div>}

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-row name-row">
              <div className="name-field">
                <label>First Name:</label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="name-field">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
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
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
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
                name="confirm_password"
                placeholder="Confirm password"
                value={formData.confirm_password}
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