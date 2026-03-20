import React, { useState, useEffect } from "react";
import "./ComputerTest.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { FaGraduationCap, FaDesktop, FaCommentDots } from "react-icons/fa";

function ComputerTest({ onNavigate, subject = "Computer Science", topic = "Fundamentals of Computing" }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 30; // Computer Science 30 questions limit
  
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showExitModal, setShowExitModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const themeClass = "theme-green"; // Computer is green theme

  const computerQuestions = [
    { type: "mcq", text: "What does CPU stand for?", options: ["A. Central Processing Unit", "B. Computer Personal Unit", "C. Central Processor Unit", "D. Control Processing Unit"], correctAnswer: 0 },
    { type: "mcq", text: "Which of the following is an input device?", options: ["A. Monitor", "B. Printer", "C. Keyboard", "D. Speaker"], correctAnswer: 2 },
    { type: "mcq", text: "What does RAM stand for?", options: ["A. Random Access Memory", "B. Read Only Memory", "C. Random Active Memory", "D. Read Access Memory"], correctAnswer: 0 },
    { type: "mcq", text: "Which of the following is an operating system?", options: ["A. Microsoft Word", "B. Linux", "C. Google Chrome", "D. Python"], correctAnswer: 1 },
    { type: "mcq", text: "In computing, what is a bit?", options: ["A. A single binary digit (0 or 1)", "B. 8 bytes", "C. A small piece of data", "D. A network protocol"], correctAnswer: 0 },
    { type: "mcq", text: "What does HTTP stand for?", options: ["A. HyperText Transfer Protocol", "B. HyperLink Transfer Protocol", "C. HyperText Transmission Protocol", "D. Hyper Terminal Transfer Protocol"], correctAnswer: 0 },
    { type: "mcq", text: "Which language is primarily used for web styling?", options: ["A. HTML", "B. Python", "C. CSS", "D. C++"], correctAnswer: 2 },
    { type: "mcq", text: "What is a motherboard?", options: ["A. A software program", "B. The main circuit board", "C. An input device", "D. A power supply"], correctAnswer: 1 },
    { type: "mcq", text: "What does GUI stand for?", options: ["A. Graphical User Interface", "B. General Utility Interface", "C. Graphic Unit Integration", "D. General User Interface"], correctAnswer: 0 },
    { type: "mcq", text: "What is phishing?", options: ["A. A new programming language", "B. A cyber-attack to steal data", "C. A hardware device", "D. A network error"], correctAnswer: 1 },
    { type: "mcq", text: "Which component is known as the brain of the computer?", options: ["A. RAM", "B. Hard Drive", "C. CPU", "D. Monitor"], correctAnswer: 2 },
    { type: "mcq", text: "What is cloud computing?", options: ["A. Weather predicting servers", "B. Storing data over the internet", "C. Local hardware storage", "D. Wireless keyboards"], correctAnswer: 1 },
    { type: "mcq", text: "Which is a volatile memory?", options: ["A. ROM", "B. Hard Disk", "C. SSD", "D. RAM"], correctAnswer: 3 },
    { type: "mcq", text: "What does IP stand for in 'IP Address'?", options: ["A. Internet Provider", "B. Internal Process", "C. Internet Protocol", "D. International Protocol"], correctAnswer: 2 },
    { type: "mcq", text: "What is an algorithm?", options: ["A. A computer component", "B. A step-by-step procedure to solve a problem", "C. A type of virus", "D. A database"], correctAnswer: 1 }
  ];

  const getMockQuestionData = (qNum) => {
    return computerQuestions[(qNum - 1) % computerQuestions.length];
  };

  const currentData = getMockQuestionData(currentQuestion);

  const handleOptionSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) setCurrentQuestion(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) setCurrentQuestion(prev => prev - 1);
  };

  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercent = (answeredCount / totalQuestions) * 100;

  const testHistory = [
    { title: "Software & Systems Test 3 (55%)- Completed", icon: <FaDesktop />, color: "#28a745" },
  ];

  const calculateScore = () => {
    let earnedPoints = 0;
    for (let i = 1; i <= totalQuestions; i++) {
      const qData = getMockQuestionData(i);
      if (selectedAnswers[i] === qData.correctAnswer) {
        earnedPoints++;
      }
    }
    const finalScore = (earnedPoints / totalQuestions) * 100;
    return Math.round(finalScore);
  };

  const renderQuestionGrid = () => (
    <div className="question-grid-container">
      <h3>Select Question:</h3>
      <div className="grid-numbers">
        {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((num) => (
          <div 
            key={num} 
            className={`grid-number ${currentQuestion === num ? "active" : ""} ${selectedAnswers[num] !== undefined ? "answered" : ""}`}
            onClick={() => setCurrentQuestion(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`test-exam-container ${themeClass}`}>
      <Navbar />

      <div className="test-exam-content">
        <div className="test-main-area">
          <div className="test-top-header">
            <div className="test-header-text">
              <h1>
                <span className="subject-name">{subject}</span> Test - <span className="topic-name">{topic}</span>
              </h1>
              <p>If you want to be a tech bro/sis, here's your head start.</p>
            </div>
            <div className="test-header-image">
              <img src="/src/assets/images/student-kid.avif" alt="Illustration" />
            </div>
          </div>

          <div className="question-wrapper">
            <div className="question-interaction-area">
              <div className="question-info-bar">
                <span className="question-counter">Question {currentQuestion} of {totalQuestions}</span>
                <div className="time-pill">
                  Time Remaining: <strong>{formatTime(timeLeft)}</strong>
                </div>
              </div>

              <div className="question-prompt">
                {currentData.text}
              </div>

              <div className="options-container">
                {currentData.options.map((option, idx) => (
                  <div
                    key={idx}
                    className={`option-box ${selectedAnswers[currentQuestion] === idx ? "selected" : ""}`}
                    onClick={() => handleOptionSelect(idx)}
                  >
                    {option}
                  </div>
                ))}
              </div>

              <div className="test-nav-actions">
                <button className="btn-test-nav next" onClick={handleNext}>Next</button>
                {currentQuestion > 1 && (
                  <button className="btn-test-nav prev" onClick={handlePrevious}>Previous</button>
                )}
              </div>
            </div>
          </div>

          {renderQuestionGrid()}
        </div>

        <div className="test-sidebar-area">
          <div className="widget-card summary-widget">
            <h4>Test Summary</h4>
            <p className="widget-sub">Progress made</p>
            <div className="progress-bar-bg">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <div className="progress-stats">
              <span>Questions answered</span>
              <strong>{answeredCount}</strong>
            </div>
            <button className="btn-end-test" onClick={() => setShowExitModal(true)}>End Test</button>
          </div>

          <div className="widget-card history-widget">
            <div className="history-header"></div>
            <h4>Your Test History</h4>
            <div className="history-items">
              {testHistory.map((item, idx) => (
                <div key={idx} className="history-item">
                  <div className="history-icon" style={{ backgroundColor: item.color }}>
                    {item.icon}
                  </div>
                  <div className="history-text">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="floating-chat">
        <div className="chat-bubble">
           <FaCommentDots size={24} color="white" />
        </div>
      </div>

      {showExitModal && (
        <div className="modal-overlay">
          <div className="exit-modal">
            <p>You clicked to end the test.<br/><strong>Are you sure?</strong></p>
            <div className="modal-buttons">
              <button 
                className="btn-modal yes" 
                onClick={() => {
                  const calculatedScore = calculateScore();
                  onNavigate("result", { score: calculatedScore, subject, topic, selectedAnswers });
                }}
              >
                Yes
              </button>
              <button className="btn-modal no" onClick={() => setShowExitModal(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ComputerTest;
