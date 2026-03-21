import React, { useState, useEffect } from "react";
import "./MathsTest.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { FaGraduationCap, FaDesktop, FaCommentDots } from "react-icons/fa";

function MathsTest({ onNavigate, subject = "Mathematics", topic = "Number & Numeration" }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 30; // Maths 30 questions limit
  
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins for Maths
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

  const themeClass = "theme-orange"; // Maths is orange theme

  const mathQuestions = [
    { type: "mcq", text: "What is the decimal value (base-10) of the number 1011₂ (base-2)?", options: ["A. 9", "B. 11", "C. 13", "D. 15"], correctAnswer: 1 },
    { type: "mcq", text: "Solve for x: 2x + 5 = 15", options: ["A. 5", "B. 10", "C. 15", "D. 20"], correctAnswer: 0 },
    { type: "mcq", text: "What is the square root of 144?", options: ["A. 10", "B. 12", "C. 14", "D. 16"], correctAnswer: 1 },
    { type: "mcq", text: "Find the area of a circle with radius 7cm (take π=22/7):", options: ["A. 154 cm²", "B. 44 cm²", "C. 144 cm²", "D. 22 cm²"], correctAnswer: 0 },
    { type: "mcq", text: "Simplify: 3(x + 2) - 2x", options: ["A. x + 6", "B. 5x + 6", "C. x - 6", "D. 5x - 6"], correctAnswer: 0 },
    { type: "mcq", text: "What is 15% of 200?", options: ["A. 15", "B. 20", "C. 30", "D. 45"], correctAnswer: 2 },
    { type: "mcq", text: "Solve: 8 ÷ 2(2 + 2) = ?", options: ["A. 1", "B. 16", "C. 8", "D. 4"], correctAnswer: 1 },
    { type: "mcq", text: "If a triangle has angles 90° and 45°, what is the third angle?", options: ["A. 30°", "B. 45°", "C. 60°", "D. 90°"], correctAnswer: 1 },
    { type: "mcq", text: "Convert 0.75 to a fraction:", options: ["A. 1/2", "B. 3/4", "C. 2/3", "D. 4/5"], correctAnswer: 1 },
    { type: "mcq", text: "If 5 pencils cost $10, how much do 12 pencils cost?", options: ["A. $24", "B. $20", "C. $12", "D. $25"], correctAnswer: 0 },
    { type: "mcq", text: "Which number is a prime number?", options: ["A. 9", "B. 15", "C. 21", "D. 29"], correctAnswer: 3 },
    { type: "mcq", text: "What is the value of 5³?", options: ["A. 15", "B. 25", "C. 125", "D. 625"], correctAnswer: 2 },
    { type: "mcq", text: "What is the perimeter of a rectangle with length 8 and width 5?", options: ["A. 13", "B. 26", "C. 40", "D. 18"], correctAnswer: 1 },
    { type: "mcq", text: "Calculate the median of 2, 5, 8, 11, 14:", options: ["A. 5", "B. 8", "C. 11", "D. 6"], correctAnswer: 1 },
    { type: "mcq", text: "Expand: (x + 2)(x + 3)", options: ["A. x² + 6", "B. x² + 5x + 6", "C. 2x + 5", "D. x² + x + 6"], correctAnswer: 1 }
  ];

  const getMockQuestionData = (qNum) => {
    return mathQuestions[(qNum - 1) % mathQuestions.length];
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
    { title: "Algebra Processes Test 1 (80%)- Completed", icon: <FaGraduationCap />, color: "#00A3FF" },
    { title: "Geometry Test 3 (65%)- Completed", icon: <FaDesktop />, color: "#28a745" },
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
              <p>How well do you know how to work with numbers?</p>
            </div>
            <div className="test-header-image">
              <img src="/assets/images/student-kid.avif" alt="Illustration" />
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

export default MathsTest;
