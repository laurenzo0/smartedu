import React from "react";
import "./ReportCard.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaSlidersH,
  FaCommentDots,
  FaCalculator,
  FaBookOpen,
  FaDesktop
} from "react-icons/fa";

function ReportCard({ onNavigate }) {
  const subjects = [
    {
      id: "math",
      title: "Mathematics",
      color: "#F2994A",
      image: "src/assets/images/confused student.jpeg", // Attempting a safe placeholder, normally we map based on assets
      icon: FaCalculator,
      scores: [
        { label: "Number and Numeration", score: 190, total: 200 },
        { label: "Algebraic Processes", score: 160, total: 200 },
        { label: "Geometry and Trigonometry", score: 25, total: 200 },
        { label: "Calculus", score: 190, total: 200 },
        { label: "Statistics and Probability", score: 180, total: 200 },
      ],
    },
    {
      id: "english",
      title: "English Language",
      color: "#2D9CDB",
      image: "src/assets/images/book stack.jpeg",
      icon: FaBookOpen,
      scores: [
        { label: "Lexis and Structures", score: 190, total: 200 },
        { label: "Oral English", score: 180, total: 200 },
        { label: "Comprehension Summary", score: 35, total: 200 },
        { label: "Essay Writing", score: 190, total: 200 },
        { label: "Literature-In-English", score: 190, total: 200 },
      ],
    },
    {
      id: "cs",
      title: "Computer Science",
      color: "#27AE60",
      image: "src/assets/images/purple big guy.jpeg",
      icon: FaDesktop,
      scores: [
        { label: "Fundamentals of Computing", score: 180, total: 200 },
        { label: "Computer Architecture and Operations", score: 190, total: 200 },
        { label: "Software & Systems", score: 160, total: 200 },
        { label: "Networking and The Internet", score: 25, total: 200 },
        { label: "Programming Logic", score: 190, total: 200 },
        { label: "Data Handling and Security", score: 180, total: 200 },
      ],
    },
  ];

  return (
    <div className="report-container">
      {/* Top Navigation / Search Bar */}
      <div className="report-top-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="action-icons">
          <div className="icon-box" onClick={() => onNavigate("practice")}>
            <FaBell />
          </div>
          <div className="icon-box" onClick={() => onNavigate("profile")}>
            <FaUser />
          </div>
          <div className="icon-box">
            <FaSlidersH />
          </div>
        </div>
      </div>

      <div className="report-content">
        {/* User Info Section */}
        <div className="my-result-wrapper">
          <h3 className="result-header">MY RESULT</h3>
          <div className="user-profile-card">
            <div className="avatar-placeholder"></div>
            <div className="user-details">
              <h2>John, Aragon</h2>
              <p className="detail-row">Date of Birth: <span>March 04, 2006</span></p>
              <p className="detail-row">Test Taken: <span>March 04, 2026</span></p>
            </div>
          </div>
        </div>

        {/* Correctly Answered Questions Section */}
        <div className="questions-section">
          <h2 className="section-title">Correctly Answered Questions</h2>
          <div className="subjects-grid">
            {subjects.map((subject) => (
              <div key={subject.id} className="subject-row">
                <div className="subject-info-box">
                  <img src={subject.image} alt={subject.title} className="subject-image" />
                  <h3 style={{ color: subject.color }}>{subject.title}</h3>
                </div>
                
                <div className="scores-list">
                  {subject.scores.map((item, idx) => {
                    const percentage = (item.score / item.total) * 100;
                    const Icon = subject.icon;
                    return (
                      <div key={idx} className="score-item">
                        <div className="score-icon-wrapper">
                          <Icon className="score-icon" />
                        </div>
                        <div className="progress-container">
                          <div className="progress-top-row">
                            <span className="score-label">{item.label}</span>
                            <span className="score-ratio">{item.score}/{item.total}</span>
                          </div>
                          <div className="progress-track">
                            <div
                              className="progress-fill"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-copyright">
          © 2026 <span className="text-orange">SmartEdu</span>. All Rights Reserved
        </div>
      </div>

      {/* Floating Chat Icon */}
      <div className="floating-chat">
        <FaCommentDots />
      </div>
    </div>
  );
}

export default ReportCard;
