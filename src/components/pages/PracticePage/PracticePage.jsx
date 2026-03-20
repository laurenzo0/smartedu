import React from "react";
import "./PracticePage.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaCog,
} from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi"; // Pencil icon for button

// Import images from src/assets to ensure they bundle
import englishFull from "../../../assets/images/group english.jpeg";
import mathFull from "../../../assets/images/desk study.jpeg";
import computerFull from "../../../assets/images/computer motherboard.jpeg";

import englishSection from "../../../assets/images/class study.jpeg";
import mathSection from "../../../assets/images/numbers.jpeg";
import computerSection from "../../../assets/images/ict circuit.jpeg";

import chatIcon from "../../../assets/images/message.jpeg";

function PracticePage({ onNavigate }) {
  const fullSubjects = [
    {
      id: "english",
      title: "English Language",
      buttonColor: "#1B75E5", // matching figma blue
      titleColor: "#1B75E5",
      image: englishFull,
      altImage: "/assets/learnpage2.png"
    },
    {
      id: "mathematics",
      title: "Mathematics",
      buttonColor: "#F58220", // figma orange
      titleColor: "#F58220",
      image: mathFull,
      altImage: "/assets/learnpage3.png"
    },
    {
      id: "computer",
      title: "Computer Science",
      buttonColor: "#1A9540", // figma green
      titleColor: "#1A9540",
      image: computerFull,
      altImage: "/assets/learnpage4.png"
    }
  ];

  const sections = [
    {
      id: "english-section",
      title: "English",
      items: [
        "Lexis and Structure",
        "Essay Writing",
        "Oral English",
        "Literature-in-English",
        "Comprehension Summary",
      ],
      image: englishSection,
      altImage: "/assets/learnpage5.png"
    },
    {
      id: "mathematics-section",
      title: "Mathematics",
      items: [
        "Number and Numeration",
        "Calculus",
        "Algebraic Processes",
        "Statistics and Probability",
        "Geometry and Trigonometry",
      ],
      image: mathSection,
      altImage: "/assets/learnpage7.png"
    },
    {
      id: "computer-section",
      title: "Computer",
      items: [
        "Fundamentals of Computing",
        "Networking & The Internet",
        "Computer Architecture and Operations",
        "Programming Logic",
        "Software and Systems",
        "Data Handling & Security",
      ],
      image: computerSection,
      altImage: "/assets/learnpage8.png"
    }
  ];

  return (
    <div className="practice-container">
      {/* Top Navigation / Search Bar */}
      <div className="practice-top-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="action-icons">
          <div className="icon-box">
            <FaBell />
          </div>
          <div className="icon-box">
            <FaUser />
          </div>
          <div className="icon-box">
            <FaCog />
          </div>
        </div>
      </div>

      {/* Hero Banner Section using background image map */}
      <div className="practice-banner">
        <div className="banner-content">
          <h1>Test Yourself, Aragon</h1>
          <p>How well do you know a subject? Let's find out...</p>
        </div>
        <div className="banner-image">
          {/* Flying character */}
          <img src="/assets/images/practice-banner.png" alt="Flying Character" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      </div>

      {/* Full Subjects Section */}
      <div className="section-header">
        <h2>YOU CAN TEST YOURSELF ON AN ENTIRE SUBJECT</h2>
      </div>
      <div className="full-subjects-grid">
        {fullSubjects.map((subject) => (
          <div key={subject.id} className="subject-card">
            <div className="subject-image">
              <img 
                src={subject.image} 
                alt={subject.title} 
                onError={(e) => { e.target.src = subject.altImage; }}
              />
            </div>
            <h3 style={{ color: subject.titleColor }}>{subject.title}</h3>
            <button 
              className="full-test-btn" 
              style={{ backgroundColor: subject.buttonColor }}
              onClick={() => onNavigate && onNavigate("test", { subject: subject.id })}
            >
              TAKE A FULL TEST <HiOutlinePencilAlt className="pencil-icon" />
            </button>
          </div>
        ))}
      </div>

      {/* Sectional Tests Section */}
      <div className="section-header">
        <h2>YOU CAN ALSO TAKE A TEST ON ANY SECTION OF A SUBJECT</h2>
      </div>
      <div className="sectional-tests-list">
        {sections.map((section) => (
          <div key={section.id} className="sectional-card">
            <h3 className="sectional-card-title">{section.title}</h3>
            <div className="sectional-card-body">
              <div className="sectional-image">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  onError={(e) => { e.target.src = section.altImage; }}
                />
              </div>
              <div className="sectional-content">
                <ul className="sectional-items">
                  {section.items.map((item, idx) => (
                    <li key={idx}><span className="bullet-dot"></span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="practice-footer-copyright">
        © 2026 <span className="orange-text">SmartEdu</span>. All Rights Reserved
      </div>

      {/* Floating Chat Icon */}
      <div className="floating-chat">
        <img src={chatIcon} alt="chat" onError={(e) => { e.target.style.display='none'}} />
      </div>
    </div>
  );
}

export default PracticePage;
