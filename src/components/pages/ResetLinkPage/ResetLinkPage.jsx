import React from "react";
import "./ResetLinkPage.css";

function ResetLinkPage({ onNavigate }) {
  return (
    <div className="reset-link-container">
      <header className="reset-link-header">
        <div className="logo-box" onClick={() => onNavigate("login")}>
          <img src="/assets/logo2.png" alt="SmartEdu Logo" />
        </div>
      </header>

      <div className="reset-link-content">
        <p className="reset-link-text">
          Click the link below to reset your Password
        </p>
        <span
          className="reset-url-link"
          onClick={() => onNavigate("new-password")}
        >
          https://www.smartedu.com/?forgot-password/A8yJ8q3XktW4nCsgn8mA6d/id=836-3133&t=3LyQrdszbX2siECY-0
        </span>
      </div>

      <footer className="reset-link-footer">
        © 2026 <span className="footer-brand">SmartEdu</span>. All Rights
        Reserved
      </footer>
    </div>
  );
}

export default ResetLinkPage;
