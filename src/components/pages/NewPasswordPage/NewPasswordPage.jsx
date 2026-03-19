import React, { useState } from "react";
import "./NewPasswordPage.css";

function NewPasswordPage({ onNavigate }) {
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
    
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://smartedu-cu15.onrender.com/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Using "password" in body. Adjust if your backend expects token or different keys.
        body: JSON.stringify({ password }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { message: "An unexpected error occurred." };
      }

      if (!response.ok) {
        throw new Error(data.message || "Failed to reset password");
      }

      console.log("Password changed successfully", data);
      onNavigate("login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="new-password-container">
      <header className="new-password-header">
        <div onClick={() => onNavigate("login")}>
          <img 
            src="/assets/logo2.png" 
            alt="SmartEdu Logo" 
            className="logo"
          />
        </div>
      </header>

      <div className="new-password-content">
        <h2 className="new-password-title">Enter your new Password</h2>
        
        {error && <div className="error-message" style={{ color: "red", marginTop: "1rem" }}>{error}</div>}

        <form className="new-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="password"
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
