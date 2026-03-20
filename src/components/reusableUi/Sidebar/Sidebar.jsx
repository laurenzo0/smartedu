import "./Sidebar.css";
import React, { useState } from "react";
import {
  FaThLarge,
  FaBook,
  FaFileAlt,
  FaChartBar,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";

function Sidebar({ onNavigate, currentPage }) {


  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo-container">
          <img
            src="src/assets/logo1.png"
            alt="Logo default"
            className="logo-img logo-default"
          />
          <img
            src="src/assets/logo2.png"
            alt="Logo hover"
            className="logo-img logo-hover"
          />
        </div>
        <span className="logo-text"></span>
      </div>

      <nav className="menu-list">
        <div
          className={`menu-item ${currentPage === "dashboard" ? "active" : ""}`}
          onClick={() => onNavigate("dashboard")}
        >
          <FaThLarge className="icon" />
          <span className="text">Dashboard</span>
        </div>

        <div
          className={`menu-item ${currentPage === "learn" ? "active" : ""}`}
          onClick={() => onNavigate("learn")}
        >
          <FaBook className="icon" />
          <span className="text">Learn</span>
        </div>

        <div
          className={`menu-item ${currentPage === "practice" ? "active" : ""}`}
          onClick={() => onNavigate("practice")}
        >
          <FaFileAlt className="icon" />
          <span className="text">Practice</span>
        </div>

        <div
          className={`menu-item ${currentPage === "report" ? "active" : ""}`}
          onClick={() => onNavigate("report")}
        >
          <FaChartBar className="icon" />
          <span className="text">Report Card</span>
        </div>

        <div
          className={`menu-item ${currentPage === "profile" ? "active" : ""}`}
          onClick={() => onNavigate("profile")}
        >
          <FaUser className="icon" />
          <span className="text">Profile</span>
        </div>

        <div
          className={`menu-item ${currentPage === "result" ? "active" : ""}`}
          onClick={() => onNavigate("result")}
        >
          <FaEllipsisH className="icon" />
          <span className="text">More</span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
