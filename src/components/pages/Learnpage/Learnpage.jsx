import React from "react";
import "./Learnpage.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaSlidersH,
  FaCommentDots,
} from "react-icons/fa";

function Learnpage({ onNavigate }) {
  const topics = [
    {
      id: 1,
      title: "Fundamentals of Computing",
      items: [
        "Evolution of Computing",
        "Classification of Computers",
        "Components of a Computer",
      ],
      image: "/assets/learnpage2.png",
    },
    {
      id: 2,
      title: "Computer Architecture & Operations",
      items: ["The CPU", "Memory Unit", "Logic Gates", "Number Systems"],
      image: "/assets/learnpage3.png",
    },
    {
      id: 3,
      title: "Software & Systems",
      items: [
        "System Software",
        "Application Software",
        "Database Management Systems (DBMS)",
      ],
      image: "/assets/learnpage4.png",
    },
    {
      id: 4,
      title: "Networking & The Internet",
      items: ["Networking Basics", "Internet Protocols", "Web Design"],
      image: "/assets/learnpage5.png",
    },
    {
      id: 5,
      title: "Programming Logic",
      items: ["Algorithms", "Flowcharts", "High-Level Languages"],
      image: "/assets/learnpage7.png" /* Assets list showed learnpage7.png */,
    },
    {
      id: 6,
      title: "Data Handling & Security",
      items: ["Data Representation", "Computer Ethics & Security"],
      image: "/assets/learnpage8.png",
    },
  ];

  return (
    <div className="learn-container">
      {/* Top Navigation / Search Bar */}
      <div className="learn-top-bar">
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

      {/* Hero Welcome Section */}
      <div className="learn-hero">
        <div className="hero-text">
          <span className="greeting">Hi, Aragon</span>
          <h1>Welcome to <span className="text-orange">Computer Science</span> Class.</h1>
          <p>
            Keep pushing through the difficult logic—your ability to 
            build and innovate is your greatest asset.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/learnpage1.png" alt="Student coding" />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="topics-grid">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <div className="topic-image">
              <img src={topic.image} alt={topic.title} />
            </div>
            <div className="topic-content">
              <h3>{topic.title}</h3>
              <ul>
                {topic.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chat Icon */}
      <div className="floating-chat">
        <FaCommentDots />
      </div>
    </div>
  );
}

export default Learnpage;
