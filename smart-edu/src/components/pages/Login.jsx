import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Send a POST request to backend
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = { message: "An unexpected error occurred." };
      }

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      console.log("Login success:", data);
      alert("Logged in successfully!");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <header className="login-header">
          <div className="logo-container">
            <img src="/assets/logo.png" alt="logo" />
          </div>
        </header>

        <div className="welcome-section">
          <h1>Welcome Back</h1>
          <p className="signup-prompt">
            Don't Have an Account Yet?{" "}
            <a href="#" className="signup-link">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      <div className="login-right-wrapper">
        <div className="login-right">
          <h2 className="form-title">Login</h2>

          {error && <div className="error-message">{error}</div>}

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group row-layout">
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

            <div className="form-group row-layout">
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

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <a href="#" className="forgot-password">
            Forgotten Password?
          </a>
        </div>
      </div>

      <footer className="login-footer">
        © 2026 <span className="footer-brand">SmartEdu</span>. All Rights
        Reserved
      </footer>
    </div>
  );
}

export default Login;
