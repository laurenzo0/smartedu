import React, { useState } from "react";
import "./ResetPassword.css";
import { FaArrowLeft } from "react-icons/fa";

function ResetPassword({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Send the request in the background so it doesn't block UI navigation
    fetch("https://smartedu-cu15.onrender.com/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(res => res.json())
      .then(data => console.log("Backend response:", data))
      .catch(err => console.error("Background fetch error:", err));

    // Wait a brief moment for visual realism, then navigate no matter what
    setTimeout(() => {
      setLoading(false);
      onNavigate("reset-link");
    }, 1000);
  };

  return (
    <div className="reset-container">
      <header className="reset-header">
        <img
            src="/assets/logo2.png" 
            alt="SmartEdu Logo" 
            className="logo"
            onClick={() => onNavigate("login")}
          />
          <button className="back-arrow reset-back-arrow" onClick={() => onNavigate("login")}>
            <FaArrowLeft />
          </button>
      </header>

      <div className="reset-content">
        <h2 className="reset-title">Reset Password</h2>
        <p className="reset-subtitle">
          Enter your Email to reset your Password
        </p>

        {error && <div className="error-message" style={{ color: "red", marginBottom: "1rem" }}>{error}</div>}

        <form className="reset-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="reset-input"
          />
          <button type="submit" className="reset-btn" disabled={loading}>
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <a
          href="#"
          className="back-to-login"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("login");
          }}
        >
          Back to Login
        </a>
      </div>

      <footer className="reset-footer">
        © 2026 <span className="footer-brand">SmartEdu</span>. All Rights
        Reserved
      </footer>
    </div>
  );
}

export default ResetPassword;
