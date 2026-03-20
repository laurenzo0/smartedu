import React from "react";
import "./Learnpage.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaSlidersH,
  FaCommentDots,
} from "react-icons/fa";

function Learnpage({ onNavigate, subject = "Computer Science" }) {
  const computerTopics = [
    { id: 1, title: "Fundamentals of Computing", items: ["Evolution of Computing", "Classification of Computers", "Components of a Computer"], image: "/assets/learnpage2.png" },
    { id: 2, title: "Computer Architecture & Operations", items: ["The CPU", "Memory Unit", "Logic Gates", "Number Systems"], image: "/assets/learnpage3.png" },
    { id: 3, title: "Software & Systems", items: ["System Software", "Application Software", "Database Management Systems (DBMS)"], image: "/assets/learnpage4.png" },
    { id: 4, title: "Networking & The Internet", items: ["Networking Basics", "Internet Protocols", "Web Design"], image: "/assets/learnpage5.png" },
    { id: 5, title: "Programming Logic", items: ["Algorithms", "Flowcharts", "High-Level Languages"], image: "/assets/learnpage7.png" },
    { id: 6, title: "Data Handling & Security", items: ["Data Representation", "Computer Ethics & Security"], image: "/assets/learnpage8.png" },
  ];

  const mathTopics = [
    { id: 1, title: "Algebra & Equations", items: ["Linear Equations", "Quadratic Functions", "Polynomials"], image: "/assets/learnpage2.png" },
    { id: 2, title: "Geometry & Trigonometry", items: ["Angles & Shapes", "Pythagoras Theorem", "Trigonometric Ratios"], image: "/assets/learnpage3.png" },
    { id: 3, title: "Calculus", items: ["Differentiation", "Integration", "Limits"], image: "/assets/learnpage4.png" },
    { id: 4, title: "Statistics & Probability", items: ["Mean, Median, Mode", "Probability Laws", "Data Distribution"], image: "/assets/learnpage5.png" },
    { id: 5, title: "Number Theory", items: ["Primes & Factors", "Modular Arithmetic", "Sequences"], image: "/assets/learnpage7.png" },
    { id: 6, title: "Financial Mathematics", items: ["Simple & Compound Interest", "Profit & Loss", "Taxation"], image: "/assets/learnpage8.png" },
  ];

  const englishTopics = [
    { id: 1, title: "Grammar & Syntax", items: ["Parts of Speech", "Sentence Structure", "Punctuation"], image: "/assets/learnpage2.png" },
    { id: 2, title: "Literature & Prose", items: ["Analysis of Novels", "Character Development", "Themes"], image: "/assets/learnpage3.png" },
    { id: 3, title: "Vocabulary & Diction", items: ["Synonyms & Antonyms", "Idiomatic Expressions", "Etymology"], image: "/assets/learnpage4.png" },
    { id: 4, title: "Poetry & Creative Writing", items: ["Metaphors & Similes", "Rhythm & Rhyme", "Short Story Writing"], image: "/assets/learnpage5.png" },
    { id: 5, title: "Reading Comprehension", items: ["Critical Reading", "Summarization", "Inference"], image: "/assets/learnpage7.png" },
    { id: 6, title: "Professional Writing", items: ["Formal Letters", "Report Writing", "Essay Techniques"], image: "/assets/learnpage8.png" },
  ];

  const getTopicData = () => {
    const sub = subject.toLowerCase();
    if (sub.includes("math")) return mathTopics;
    if (sub.includes("english")) return englishTopics;
    return computerTopics;
  };

  const getHeroText = () => {
    const sub = subject.toLowerCase();
    if (sub.includes("math")) return { title: "Mathematics", para: "Explore the language of numbers and patterns that define our logical world.", color: "text-blue" };
    if (sub.includes("english")) return { title: "English", para: "Master the art of communication and delve into the depth of human expression.", color: "text-green" };
    return { title: "Computer Science", para: "Keep pushing through the difficult logic—your ability to build and innovate is your greatest asset.", color: "text-orange" };
  };

  const topics = getTopicData();
  const heroInfo = getHeroText();

  const handleTopicClick = (topicTitle) => {
    if (onNavigate) {
      onNavigate("test", { 
        subject: subject, 
        topic: topicTitle 
      });
    }
  };

  return (
    <div className="learn-container">
      {/* Top Navigation / Search Bar */}
      <div className="learn-top-bar">
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
            <FaSlidersH />
          </div>
        </div>
      </div>

      {/* Hero Welcome Section */}
      <div className="learn-hero">
        <div className="hero-text">
          <span className="greeting">Hi, Aragon</span>
          <h1>Welcome to <span className={heroInfo.color}>{heroInfo.title}</span> Class.</h1>
          <p>{heroInfo.para}</p>
        </div>
        <div className="hero-image">
          <img src="/assets/learnpage1.png" alt="Student learning" />
        </div>
      </div>

      {/* Topics Grid */}
      <div className="topics-grid">
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            className="topic-card" 
            onClick={() => handleTopicClick(topic.title)}
            style={{ cursor: "pointer" }}
          >
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
