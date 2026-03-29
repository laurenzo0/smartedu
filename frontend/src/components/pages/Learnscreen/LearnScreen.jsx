import React, { useState, useEffect } from "react";
import "./learnscreen.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { useUser } from "../../../contexts/UserContext";
import { 
  FaCheckCircle, 
  FaLock, 
  FaPlayCircle 
} from "react-icons/fa";

const LearnScreen = ({ onNavigate, topics: paramTopics, courseTitle }) => {
  const { user } = useUser();
  const [selectedOption, setSelectedOption] = useState(null);
  const [notes, setNotes] = useState("");

  const defaultTopics = [
    { id: 1, title: "1. Synonyms and Antonyms", status: "completed", videoUrl: "https://www.youtube.com/embed/-WymV5VC88U?si=AlcmWGkpTxSefMHC" },
    { id: 2, title: "2. Rhymes", status: "completed", videoUrl: "https://www.youtube.com/embed/_1mKBtLVb3A?si=vd5HX580wHwYVF2N" },
    { id: 3, title: "3. Stress Patterns", status: "active", videoUrl: "https://www.youtube.com/embed/VDGxFRAatp8?si=rHOO99wXfIPKIPzt" },
    { id: 4, title: "4. Phonetic Symbols", status: "locked", videoUrl: "https://www.youtube.com/embed/fyVefygZnu4?si=nSveNXA251YWCKam" },
  ];

  const topics = paramTopics && paramTopics.length > 0 ? paramTopics : defaultTopics;

  const getInitialActiveTopic = () => {
    const active = topics.find(t => t.status === "active" || t.status === "completed") || topics[0];
    return active ? active.id : 1;
  };

  const [activeTopic, setActiveTopic] = useState(getInitialActiveTopic());

  useEffect(() => {
    setActiveTopic(getInitialActiveTopic());
  }, [topics]);

  const currentTopic = topics.find(t => t.id === activeTopic) || topics[0];

  const subjects = [
    {
      id: 1,
      name: "Computer Science",
      topics: 6,
      subTopics: 18,
      image: "/assets/images/purple big guy.jpeg",
      route: "computer-science"
    },
    {
      id: 2,
      name: "Mathematics",
      topics: 6,
      subTopics: 21,
      image: "/assets/images/teacher with graph.jpeg",
      route: "maths"
    },
    {
      id: 3,
      name: "English",
      topics: 5,
      subTopics: 19,
      image: "/assets/images/group english.jpeg",
      route: "english"
    },
  ];

  return (
    <div className="learn-screen-container">
      <Navbar />

      <section className="learn-header">
        <div className="welcome-text">
          <h1>Hi, {user?.first_name || 'Student'}</h1>
          <p>What do you want to <strong>Learn Today ?</strong></p>
          {courseTitle && <h2 style={{ color: '#0056D2', marginTop: '10px' }}>{courseTitle}</h2>}
          <p>Find your path, measure success, and unlock potential continuously.</p>
        </div>

        <div className="cards-container">
          {/* Empty card for the "Add" or "Start" slot if needed, matching figma */}
          <div className="subject-card empty-card">
            <div className="add-icon">+</div>
          </div>
          {subjects.map((subject) => (
            <div 
              key={subject.id} 
              className="subject-card"
              onClick={() => onNavigate && onNavigate(subject.route)}
            >
              <img src={subject.image} alt={subject.name} className="card-icon" />
              <h3>{subject.name}</h3>
              <span>{subject.topics} Topics</span>
              <span>{subject.subTopics} sub-topics</span>
            </div>
          ))}
        </div>
      </section>

      <section className="lesson-section">
        <div className="lesson-header-row">
          <span className="lesson-title">{currentTopic?.title}</span>
          <div className="progress-bar-wrapper">
            <div className="progress-fill"></div>
          </div>
        </div>

        <div className="lesson-content-grid">
          <div className="topics-list">
            {topics.map((topic) => (
              <div 
                key={topic.id} 
                className={`topic-item ${activeTopic === topic.id ? "active" : ""} ${topic.status === "locked" ? "locked" : ""}`}
                onClick={() => topic.status !== "locked" && setActiveTopic(topic.id)}
              >
                <div className="topic-icon">
                  {topic.status === "completed" ? (
                    <FaCheckCircle color="#4A90E2" />
                  ) : topic.status === "locked" ? (
                    <FaLock color="#A0AEC0" />
                  ) : (
                    <FaPlayCircle color="#4A90E2" />
                  )}
                </div>
                <span>{topic.title}</span>
              </div>
            ))}
          </div>

          <div className="video-player-container">
            <iframe
              className="youtube-iframe"
              src={currentTopic?.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bottom-grid">
        <div className="check-container">
          <h2 className="section-title">Quick Check</h2>
          <p className="quiz-subtitle">Test your understanding</p>
          <div className="quiz-content">
            <p className="quiz-question">Q1: Which word has the primary stress in "PHOtograph"?</p>
            <div className="options-list">
              {["A) PHO", "B) to", "C) graph", "D) None"].map((option, index) => (
                <button 
                  key={index} 
                  className={`option-btn ${selectedOption === index ? "selected" : ""}`}
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <button className="submit-btn" onClick={() => alert("Submitted!")}>Submit</button>
        </div>

        <div className="notes-container">
          <h2 className="section-title">My Notes</h2>
          <textarea 
            className="notes-textarea" 
            placeholder="Type your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="complete-btn" onClick={() => alert("Lesson Completed!")}>Complete</button>
            <span style={{ fontSize: '12px', color: '#718096' }}>Next: lesson 4</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnScreen;
