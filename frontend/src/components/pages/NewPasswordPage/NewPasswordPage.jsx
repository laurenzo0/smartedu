import React, { useState } from "react";
import "./NewPasswordPage.css";
import { resetPassword } from "../../../services/api";

function NewPasswordPage({ onNavigate }) {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    setError("");
    setLoading(true);

    try {
      await resetPassword(otp, password);
      console.log("Password changed successfully");
      onNavigate("login");
    } catch (err) {
      setError(err.message || "Failed to reset password. Please check your OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-password-container">
      <header className="new-password-header">
        <div onClick={() => onNavigate("login")}>
          <img 
            src="src/assets/logo2.png" 
            alt="SmartEdu Logo" 
            className="logo"
          />
        </div>
      </header>

      <div className="new-password-content">
        <h2 className="new-password-title">Enter your new Password</h2>
        
        {error && <div className="error-message" style={{ color: "red", marginTop: "1rem", textAlign: "center" }}>{error}</div>}

        <form className="new-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>OTP:</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              placeholder="new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              placeholder="confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="change-pwd-btn" disabled={loading}>
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>

      <footer className="new-password-footer">
        © 2026 <span className="footer-brand">SmartEdu</span>. All Rights
        Reserved
      </footer>
    </div>
  );
}

export default NewPasswordPage;
