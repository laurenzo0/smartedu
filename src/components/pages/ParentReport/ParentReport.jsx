import React from "react";
import "./ParentReport.css";
import Navbar from "../../reusableUi/Navbar/Navbar";

const ParentReport = () => {
  return (
    <main className="parent-report-container">
      <Navbar />

      <div className="report-header-section">
        <h2 className="report-title">MY RESULT</h2>
        <div className="profile-banner">
          <div className="profile-info">
            <div className="profile-pic-placeholder"></div>
            <div className="profile-details">
              <h3>John, Aragon</h3>
              <p>Date of Birth: March 04, 2005</p>
              <p>Test Taken: March 04, 2026</p>
            </div>
          </div>
          <div className="header-illustration">
             <img src="src/assets/images/desk study.jpeg" alt="Student studying" />
          </div>
        </div>
      </div>

      <div className="report-stats-grid">
        <div className="stats-card">
          <h3>Total Tests Taken</h3>
          <p className="total-number">300</p>
          <div className="segmented-bar">
            <div className="segment blue" style={{ width: "33%" }}></div>
            <div className="segment orange" style={{ width: "33%" }}></div>
            <div className="segment green" style={{ width: "34%" }}></div>
          </div>
          <ul className="stats-legend">
            <li><span className="dot blue"></span> English Language <span className="value">100</span></li>
            <li><span className="dot orange"></span> Mathematics <span className="value">50</span></li>
            <li><span className="dot green"></span> Computer Science <span className="value">150</span></li>
          </ul>
        </div>

        <div className="stats-card">
          <h3>Total Tests Passed</h3>
          <p className="total-number">150 / 300</p>
          <div className="segmented-bar">
            <div className="segment blue" style={{ width: "33%" }}></div>
            <div className="segment orange" style={{ width: "33%" }}></div>
            <div className="segment green" style={{ width: "34%" }}></div>
          </div>
          <ul className="stats-legend">
            <li><span className="dot blue"></span> English Language <span className="value">50</span></li>
            <li><span className="dot orange"></span> Mathematics <span className="value">25</span></li>
            <li><span className="dot green"></span> Computer Science <span className="value">75</span></li>
          </ul>
        </div>
      </div>

      <div className="performance-overview-section">
        <h3>Overall Performance</h3>
        <p className="performance-status">Fair</p>
        
        <div className="gauge-container">
          <svg viewBox="0 0 100 50" className="gauge-svg">
            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#eee" strokeWidth="8" strokeLinecap="round" />
            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#f57c00" strokeWidth="8" strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="62.8" />
          </svg>
          <div className="gauge-value">50 %</div>
        </div>
      </div>

      <div className="subjects-performance-section">
        <h3>SEE YOUR PERFORMANCE IN EACH SUBJECT</h3>
        <div className="subject-cards">
          <div className="subject-card">
            <img src="src/assets/images/english-lang.png" alt="English" />
            <h4>English Language</h4>
          </div>
          <div className="subject-card">
            <img src="src/assets/images/maths-lang.png" alt="Math" />
            <h4>Mathematics</h4>
          </div>
          <div className="subject-card">
            <img src="src/assets/images/csc.png" alt="Computer Science" />
            <h4>Computer Science</h4>
          </div>
        </div>
      </div>

      <footer className="report-footer">
        <p>© 2026 SmartEdu. All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default ParentReport;
