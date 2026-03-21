import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./Login.css";

function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    // Bypass backend completely as requested and go straight to the dashboard
    onNavigate("dashboard");
  };

  return (
    <div className="login-container">
      {/* Left Section */}
      <div className="login-left">
        <header className="login-header">
          <div className="logo-section">
            <img src="src/assets/logo2.png" alt="SmartEdu Logo" />
          </div>
          <button className="back-arrow" onClick={() => onNavigate("landing")}>
            <FaArrowLeft />
          </button>
        </header>

        <div className="welcome-section">
          <h1>Welcome Back</h1>
          <p className="login-prompt">
            Don't Have an Account Yet?{" "}
            <a 
              href="#" 
              className="signup-link"
              onClick={(e) => { e.preventDefault(); onNavigate("signup"); }}
            >
              Sign Up
            </a>
          </p>
        </div>

        <footer className="login-footer">
          © 2026 <span className="footer-brand">SmartEdu</span>. All Rights Reserved
        </footer>
      </div>

      {/* Right Section */}
      <div className="login-right">
        <div className="form-card">
          <h2 className="form-title">Login</h2>

          {error && <div className="error-message">{error}</div>}

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-row">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <a 
            href="#" 
            className="forgot-password"
            onClick={(e) => { e.preventDefault(); onNavigate("reset-password"); }}
          >
            Forgotten Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;


