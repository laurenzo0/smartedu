import React from "react";
import "./PracticePage.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaSlidersH,
  FaCommentDots,
} from "react-icons/fa";

function PracticePage({ onNavigate }) {
  const subjects = [
    {
      id: "english",
      name: "English Language",
      color: "blue",
      image: "/assets/learnpage2.png", // Using existing assets as placeholders
    },
    {
      id: "math",
      name: "Mathematics",
      color: "orange",
      image: "/assets/learnpage3.png",
    },
    {
      id: "computer",
      name: "Computer Science",
      color: "green",
      image: "/assets/learnpage4.png",
    },
  ];

  const sections = [
    {
      subject: "English",
      image: "/assets/learnpage2.png",
      topics: [
        "Lexis and Structure",
        "Oral English",
        "Comprehension Summary",
        "Essay Writing",
        "Literature-In-English",
      ],
    },
    {
      subject: "Mathematics",
      image: "/assets/learnpage3.png",
      topics: [
        "Number and Numeration",
        "Algebraic Processes",
        "Geometry and Trigonometry",
        "Calculus",
        "Statistics and Probability",
      ],
    },
    {
      subject: "Computer",
      image: "/assets/learnpage4.png",
      topics: [
        "Fundamentals of Computing",
        "Computer Architecture and Operations",
        "Software and Systems",
        "Networking & The Internet",
        "Programming Logic",
        "Data Handling & Security",
      ],
    },
  ];

  return (
    <div className="practice-container">
      {/* Top Bar */}
      <div className="practice-top-bar">
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

      {/* Hero Section */}
      <div className="practice-hero-banner">
        <div className="hero-banner-content">
          <div className="hero-banner-text">
            <h1>Test Yourself, Aragon</h1>
            <p>How well do you know how to work with next subject? let's find out...</p>
          </div>
        </div>
      </div>

      <div className="section-title-label">
        <p>YOU CAN TEST YOURSELF ON AN ENTIRE SUBJECT</p>
      </div>

      {/* Subject Cards */}
      <div className="full-test-grid">
        {subjects.map((sub) => (
          <div key={sub.id} className="full-test-card">
            <div className="full-test-img">
              <img src={sub.image} alt={sub.name} />
            </div>
            <h3 className={`title-${sub.color}`}>{sub.name}</h3>
            <button
              className={`btn-full-test bg-${sub.color}`}
              onClick={() => onNavigate("test", { subject: sub.id })}
            >
              TAKE A FULL TEST <span className="arrow">↗</span>
            </button>
          </div>
        ))}
      </div>

      <div className="section-title-label">
        <p>YOU CAN ALSO TAKE A TEST ON ANY SECTION OF A SUBJECT</p>
      </div>

      {/* Detailed Section Cards */}
      <div className="detailed-sections-container">
        {sections.map((sec, idx) => (
          <div key={idx} className="detailed-section-wrapper">
            <h3 className="detailed-section-title">{sec.subject}</h3>
            <div className="detailed-section-card">
              <div className="detailed-section-left">
                <img src={sec.image} alt={sec.subject} />
              </div>
              <div className="detailed-section-right">
                <div className="topics-listing-grid">
                  {sec.topics.map((topic, tIdx) => (
                    <div
                      key={tIdx}
                      className="detailed-topic-item"
                      onClick={() => onNavigate("test", { subject: sec.subject.toLowerCase(), topic })}
                    >
                      <span className="bullet">•</span> {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="practice-dashboard-footer">
        <div className="footer-content">
          <span>© 2026 <span className="highlight">SmartEdu.</span> All Rights Reserved</span>
        </div>
      </footer>

      <div className="floating-chat-icon">
        <FaCommentDots />
      </div>
    </div>
  );
}

export default PracticePage;
