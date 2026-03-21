import React, { useState } from 'react';
import './ParentDashboard.css';
import { FaThLarge, FaChartBar, FaUser } from 'react-icons/fa';
import { verifyAccessCode } from '../../../services/api';

const ParentDashboard = ({ onNavigate, access_code }) => {
  const [wardCode, setWardCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    onNavigate("login");
  };

  const handleProceed = async (e) => {
    e.preventDefault();
    if (!wardCode) return;
    
    setError("");
    setLoading(true);
    
    try {
      await verifyAccessCode(wardCode);
      // Success - navigate to the report card
      onNavigate("report");
    } catch (err) {
      setError(err.message || "Invalid access code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="parent-dashboard-layout">
      {/* Sidebar */}
      <aside className="parent-sidebar">
        <div className="sidebar-logo">
          <img src="src/assets/logo2.png" alt="SmartEdu Logo" />
        </div>
        <nav className="sidebar-menu">
          <div className="menu-item active">
            <FaThLarge className="menu-icon" />
            <span>Dashboard</span>
          </div>
          <div className="menu-item" onClick={() => onNavigate("report")}>
            <FaChartBar className="menu-icon" />
            <span>Report Card</span>
          </div>
          <div className="menu-item" onClick={() => onNavigate("profile")}>
            <FaUser className="menu-icon" />
            <span>Profile</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="parent-main">
        {/* Top Header */}
        <header className="parent-header">
           <div className="header-logo-mobile">
              <img src="src/assets/logo2.png" alt="SmartEdu Logo" />
           </div>
          <button className="logout-btn" onClick={handleLogout}>Log out</button>
        </header>

        {/* Welcome Banner */}
        <section className="welcome-banner">
          <div className="banner-content">
            <h1>Welcome Back.</h1>
          </div>
          <div className="banner-illustration">
             <img src="/assets/images/dashboard.jpeg" alt="Dashboard" />
          </div>
        </section>

        {/* Status Indicator */}
        <div className="status-indicator">
          <span className="dot"></span>
          <span className="status-text">Status: Parent</span>
        </div>

        {/* Ward Code Section */}
        <section className="ward-code-section">
          <h3>Enter Ward's Unique code:</h3>
          
          {access_code && (
            <div className="demo-code-note">
              Demo Access Code: <strong>{access_code}</strong>
            </div>
          )}

          {error && <div className="ward-error">{error}</div>}

          <form onSubmit={handleProceed} className="ward-form">
            <input 
              type="text" 
              value={wardCode}
              onChange={(e) => {
                setWardCode(e.target.value);
                if (error) setError("");
              }}
              placeholder="e.g. 123456" 
              className="ward-input"
            />
            <button type="submit" className="proceed-btn" disabled={loading}>
              {loading ? "Verifying..." : "Proceed"}
            </button>
          </form>
        </section>

        <footer className="parent-footer">
          © 2026 <span className="footer-brand">SmartEdu</span>. All Rights Reserved
        </footer>
      </main>
    </div>
  );
};

export default ParentDashboard;
