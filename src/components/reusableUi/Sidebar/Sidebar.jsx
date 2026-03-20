import "./Sidebar.css";
import React, { useState } from "react";
import {
  FaThLarge,
  FaBook,
  FaFileAlt,
  FaChartBar,
  FaUser,
  FaEllipsisH,
  FaChevronDown,
  FaChevronRight,
  FaDesktop,
  FaPlus,
  FaLanguage,
} from "react-icons/fa";

function Sidebar({ onNavigate, currentPage }) {
  const [isLearnOpen, setIsLearnOpen] = useState(false);

  const toggleLearn = () => {
    setIsLearnOpen(!isLearnOpen);
  };

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

        <div className="menu-group">
          <div
            className={`menu-item ${currentPage === "learn" ? "active" : ""}`}
            onClick={toggleLearn}
          >
            <FaBook className="icon" />
            <span className="text">Learn</span>
            <span className="toggle-icon">
              {isLearnOpen ? <FaChevronDown /> : <FaChevronRight />}
            </span>
          </div>

          {isLearnOpen && (
            <div className="sub-menu">
              <div 
                className="sub-item" 
                onClick={() => onNavigate("learn", { subject: "Computer Science" })}
              >
                <FaDesktop className="sub-icon" />
                <span className="sub-text">Computer Science</span>
              </div>
              <div 
                className="sub-item" 
                onClick={() => onNavigate("learn", { subject: "Mathematics" })}
              >
                <FaPlus className="sub-icon" />
                <span className="sub-text">Mathematics</span>
              </div>
              <div 
                className="sub-item" 
                onClick={() => onNavigate("learn", { subject: "English" })}
              >
                <FaLanguage className="sub-icon" />
                <span className="sub-text">English</span>
              </div>
            </div>
          )}
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
          className={`menu-item ${currentPage === "more" ? "active" : ""}`}
          onClick={() => onNavigate("more")}
        >
          <FaEllipsisH className="icon" />
          <span className="text">More</span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
