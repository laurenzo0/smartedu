import React from "react";
import "./PracticePage.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { FaExternalLinkAlt, FaCommentDots } from "react-icons/fa";

function PracticePage({ onNavigate }) {
  return (
    <div className="practice-page-container">
      <Navbar />

      <div className="practice-content">
        {/* Hero Section */}
        <div className="practice-hero">
          <img src="/src/assets/images/practice-banner.png" alt="Banner" className="hero-banner-bg" />
          <div className="hero-text">
            <h2>Test Yourself, Aragon</h2>
            <p>How well do you know these subjects? Let's find out...</p>
          </div>
        </div>

        <h3 className="section-title">YOU CAN TEST YOURSELF ON AN ENTIRE SUBJECT</h3>

        {/* Full Test Cards */}
        <div className="full-test-grid">
          <div className="full-test-card">
            <img src="/src/assets/images/study.jpeg" alt="English" className="card-illustration" />
            <h4 className="text-blue">English Language</h4>
            <button 
              className="btn-full-test btn-blue" 
              onClick={() => onNavigate("test", { subject: "English", topic: "Full Test" })}
            >
              TAKE A FULL TEST <FaExternalLinkAlt className="btn-icon" />
            </button>
          </div>
          <div className="full-test-card">
            <img src="/src/assets/images/desk study.jpeg" alt="Math" className="card-illustration" />
            <h4 className="text-orange">Mathematics</h4>
            <button 
              className="btn-full-test btn-orange" 
              onClick={() => onNavigate("test", { subject: "Mathematics", topic: "Full Test" })}
            >
              TAKE A FULL TEST <FaExternalLinkAlt className="btn-icon" />
            </button>
          </div>
          <div className="full-test-card">
            <img src="/src/assets/images/purple big guy.jpeg" alt="Computer" className="card-illustration" />
            <h4 className="text-green">Computer Science</h4>
            <button 
              className="btn-full-test btn-green" 
              onClick={() => onNavigate("test", { subject: "Computer Studies", topic: "Full Test" })}
            >
              TAKE A FULL TEST <FaExternalLinkAlt className="btn-icon" />
            </button>
          </div>
        </div>

        <h3 className="section-title">YOU CAN ALSO TAKE A TEST ON ANY SECTION OF A SUBJECT</h3>

        {/* Section Cards */}
        <div className="section-test-list">
          <div className="section-card">
            <h4 className="section-header">English</h4>
            <div className="section-body">
              <img src="/src/assets/images/group english.jpeg" alt="English Topics" className="section-img" />
              <div className="topics-list">
                <ul>
                  <li onClick={() => onNavigate("test", { subject: "English", topic: "Lexis and Structure" })}>Lexis and Structure</li>
                  <li onClick={() => onNavigate("test", { subject: "English", topic: "Oral English" })}>Oral English</li>
                  <li onClick={() => onNavigate("test", { subject: "English", topic: "Comprehension Summary" })}>Comprehension Summary</li>
                </ul>
                <ul>
                  <li onClick={() => onNavigate("test", { subject: "English", topic: "Essay Writing" })}>Essay Writing</li>
                  <li onClick={() => onNavigate("test", { subject: "English", topic: "Literature-in-English" })}>Literature-in-English</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h4 className="section-header">Mathematics</h4>
            <div className="section-body">
              <img src="/src/assets/images/numbers.jpeg" alt="Math Topics" className="section-img" />
              <div className="topics-list">
                <ul>
                  <li onClick={() => onNavigate("test", { subject: "Mathematics", topic: "Number and Numeration" })}>Number and Numeration</li>
                  <li onClick={() => onNavigate("test", { subject: "Mathematics", topic: "Algebraic Processes" })}>Algebraic Processes</li>
                  <li onClick={() => onNavigate("test", { subject: "Mathematics", topic: "Geometry and Trigonometry" })}>Geometry and Trigonometry</li>
                </ul>
                <ul>
                  <li onClick={() => onNavigate("test", { subject: "Mathematics", topic: "Calculus" })}>Calculus</li>
                  <li onClick={() => onNavigate("test", { subject: "Mathematics", topic: "Statistics and Probability" })}>Statistics and Probability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h4 className="section-header">Computer</h4>
            <div className="section-body">
              <img src="/src/assets/images/computer motherboard.jpeg" alt="Computer Topics" className="section-img" />
              <div className="topics-list">
                <ul>
                  <li onClick={() => onNavigate("test", { subject: "Computer", topic: "Fundamentals of Computing" })}>Fundamentals of Computing</li>
                  <li onClick={() => onNavigate("test", { subject: "Computer", topic: "Computer Architecture and Operations" })}>Computer Architecture and Operations</li>
                  <li onClick={() => onNavigate("test", { subject: "Computer", topic: "Software and Systems" })}>Software and Systems</li>
                </ul>
                <ul>
                  <li onClick={() => onNavigate("test", { subject: "Computer", topic: "Networking & The Internet" })}>Networking & The Internet</li>
                  <li onClick={() => onNavigate("test", { subject: "Computer", topic: "Programming Logic" })}>Programming Logic</li>
                  <li onClick={() => onNavigate("test", { subject: "Computer", topic: "Data Handling & Security" })}>Data Handling & Security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="floating-chat">
          <div className="chat-bubble">
             <FaCommentDots size={24} color="white" />
          </div>
        </div>

        <footer className="practice-footer">
          © 2026 <span className="footer-brand">SmartEdu</span>. All Rights Reserved
        </footer>
      </div>
    </div>
  );
}

export default PracticePage;
