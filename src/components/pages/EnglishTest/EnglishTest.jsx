import React, { useState, useEffect } from "react";
import "./EnglishTest.css";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaSlidersH,
  FaCommentDots,
  FaGraduationCap,
  FaDesktop,
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaIndent,
} from "react-icons/fa";

function EnglishTest({ onNavigate, subject = "english", topic = "Lexis and Structure" }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(subject === "english" ? 120 * 60 : 25 * 60); 
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [essayAnswers, setEssayAnswers] = useState({});
  const [showExitModal, setShowExitModal] = useState(false);

  const totalQuestions = subject === "english" ? 60 : 30;

  // Questions data based on subject
  const getSubjectQuestions = () => {
    if (subject === "math") {
      return [
        { id: 1, type: "mcq", text: "What is the decimal value of the binary number 1011?", options: ["A. 9", "B. 11", "C. 13", "D. 15"], correct: 1 },
        { id: 2, type: "mcq", text: "Solve for x: 3x - 7 = 14", options: ["A. 5", "B. 6", "C. 7", "D. 8"], correct: 2 },
        { id: 3, type: "mcq", text: "What is the square root of 225?", options: ["A. 13", "B. 14", "C. 15", "D. 16"], correct: 2 },
        { id: 4, type: "mcq", text: "Convert 1111 in binary to decimal.", options: ["A. 7", "B. 15", "C. 31", "D. 63"], correct: 1 },
        { id: 5, type: "mcq", text: "What is the value of pi to 2 decimal places?", options: ["A. 3.12", "B. 3.14", "C. 3.16", "D. 3.18"], correct: 1 },
      ];
    }
    if (subject === "computer" || subject === "computer science") {
      return [
        { id: 1, type: "mcq", text: "Which component is the 'brain' of the computer?", options: ["A. RAM", "B. SSD", "C. CPU", "D. Motherboard"], correct: 2 },
        { id: 2, type: "mcq", text: "What does URL stand for?", options: ["A. Unified Resource Locator", "B. Universal Resource Link", "C. Uniform Resource Locator", "D. Unique Resource Line"], correct: 2 },
        { id: 3, type: "mcq", text: "Which language is primarily used for web styling?", options: ["A. HTML", "B. Python", "C. CSS", "D. Java"], correct: 2 },
        { id: 4, type: "mcq", text: "What is the most common input device?", options: ["A. Monitor", "B. Keyboard", "C. Printer", "D. Speaker"], correct: 1 },
        { id: 5, type: "mcq", text: "Which protocol is used for secure web browsing?", options: ["A. HTTP", "B. FTP", "C. HTTPS", "D. SMTP"], correct: 2 },
      ];
    }
    // English
    return [
      { id: 1, type: "mcq", text: 'Which word is a verb: "The girl sings beautifully"?', options: ["A. Girl", "B. Sings", "C. Beautifully", "D. The"], correct: 1 },
      { id: 2, type: "mcq", text: "Choose the correct spelling:", options: ["A. Accomodation", "B. Accommodation", "C. Acommodation", "D. Acomodation"], correct: 1 },
      { id: 3, type: "mcq", text: "What is the synonym of 'Happy'?", options: ["A. Sad", "B. Jubilant", "C. Angry", "D. Tired"], correct: 1 },
      { id: 4, type: "mcq", text: "Identify the preposition: 'The cat is under the table'.", options: ["A. Under", "B. Cat", "C. Table", "D. The"], correct: 0 },
      { id: 52, type: "essay", hasPassage: true, passage: "Reading Passage about Alade...", text: "Why was Alade surprised?", correct: null },
    ];
  };

  const questions = getSubjectQuestions();

  const getQuestionData = (id) => {
    return questions.find((q) => q.id === id) || {
      id,
      type: id > 50 ? "essay" : "mcq",
      text: `Question ${id}: ${topic} assessment details...`,
      options: id > 50 ? null : ["A. Choice A", "B. Choice B", "C. Choice C", "D. Choice D"],
    };
  };

  const currentData = getQuestionData(currentQuestion);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  const handleEssayChange = (e) => {
    setEssayAnswers({ ...essayAnswers, [currentQuestion]: e.target.value });
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  const answeredCount = Object.keys(selectedAnswers).length + Object.keys(essayAnswers).length;
  const progress = (answeredCount / totalQuestions) * 100;

  const testHistory = [
    {
      id: 1,
      title: "Lexis & Structure Test 1 (70%)- Completed",
      icon: <FaGraduationCap />,
      status: "completed",
    },
    {
      id: 2,
      title: "Software & Systems Test 3 (55%)- Completed",
      icon: <FaDesktop />,
      status: "completed",
    },
  ];

  const questionGrid = Array.from({ length: totalQuestions }, (_, i) => i + 1);

  const headerContent = {
    english: { title: "ENGLISH EXAMINATION", sub: "How prepared are you for your final exam? Let's find out.", img: "/assets/learnpage1.png" },
    math: { title: "Mathematics Test", sub: "Numbers and Numeration", img: "/assets/learnpage3.png" },
    computer: { title: "Computer Test", sub: "Fundamentals of Computing", img: "/assets/learnpage4.png" },
  };

  const currentHeader = headerContent[subject] || headerContent.english;

  const handleCompleteTest = () => {
    // Basic mock scoring for demonstration
    const totalAnswered = Object.keys(selectedAnswers).length + Object.keys(essayAnswers).length;
    const mockScore = Math.min(100, Math.round((totalAnswered / totalQuestions) * 100));
    onNavigate("result", { 
      score: mockScore, 
      subject: subject.charAt(0).toUpperCase() + subject.slice(1), 
      topic 
    });
  };

  return (
    <div className={`test-container ${showExitModal ? "modal-open" : ""}`}>
      {/* Exit Modal Overlay */}
      {showExitModal && (
        <div className="modal-overlay">
          <div className="exit-modal">
            <p className="modal-text">You clicked to end the test.<br /><strong>Are you sure?</strong></p>
            <div className="modal-actions">
              <button className="btn-modal btn-yes" onClick={handleCompleteTest}>Yes</button>
              <button className="btn-modal btn-no" onClick={() => setShowExitModal(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div className="test-top-bar">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="action-icons">
          <div className="icon-box"><FaBell /></div>
          <div className="icon-box"><FaUser /></div>
          <div className="icon-box"><FaSlidersH /></div>
        </div>
      </div>

      <div className="test-content-wrapper">
        <div className="test-main-column">
          {/* Header */}
          <div className="test-header">
            <div className="header-text">
              <h1 className={`${subject}-title`}>{currentHeader.title} - <span className="topic-highlight">{topic}</span></h1>
              <p>{currentHeader.sub}</p>
            </div>
            <div className="header-illustration">
              <img src={currentHeader.img} alt="Test Illustration" />
            </div>
          </div>

          <div className={`question-layout ${currentData.hasPassage ? "with-passage" : ""}`}>
            {currentData.hasPassage && (
              <div className="passage-card">
                <h3>Instructions:</h3>
                <p>Read the following passage carefully and answer the questions on it.</p>
                <div className="passage-content">{currentData.passage}</div>
              </div>
            )}

            <div className={`question-main-area ${currentData.hasPassage ? "shrink" : ""}`}>
              <div className="question-card">
                <div className="question-info">
                  <span className="question-number">Question {currentQuestion} of {totalQuestions}</span>
                  <span className="time-remaining">
                    Time Remaining: <span className="time-value">{formatTime(timeLeft)}</span>
                  </span>
                </div>

                {currentData.type === "mcq" ? (
                  <>
                    <h2 className="question-text">{currentData.text}</h2>
                    <div className="options-list">
                      {currentData.options.map((option, index) => (
                        <div
                          key={index}
                          className={`option-item ${subject} ${selectedAnswers[currentQuestion] === index ? "selected" : ""}`}
                          onClick={() => handleOptionSelect(index)}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="essay-section">
                    <h2 className="question-text">{currentData.text}</h2>
                    {currentData.essayItems && (
                      <ul className="essay-topics">
                        {currentData.essayItems.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div className="question-footer">
                  {currentQuestion > 1 && (
                    <button className="btn-nav btn-previous" onClick={handlePrevious}>Previous</button>
                  )}
                  {currentQuestion < totalQuestions ? (
                    <button className="btn-nav btn-next" onClick={handleNext}>Next</button>
                  ) : (
                    <button className="btn-nav btn-finish" onClick={() => setShowExitModal(true)}>End Test</button>
                  )}
                </div>
              </div>

              {currentData.type === "essay" && (
                <div className="editor-card">
                  <div className="editor-toolbar">
                    <div className="tool-group"><FaBold /> <FaItalic /> <FaUnderline /></div>
                    <div className="tool-separator"></div>
                    <div className="tool-group"><FaAlignLeft /> <FaAlignCenter /> <FaAlignRight /> <FaAlignJustify /></div>
                    <div className="tool-separator"></div>
                    <div className="tool-group"><FaIndent /></div>
                  </div>
                  <textarea
                    className="essay-textarea"
                    placeholder="Type your answer here..."
                    value={essayAnswers[currentQuestion] || ""}
                    onChange={handleEssayChange}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="grid-selection-card">
            <h3>Select Question:</h3>
            <div className="question-grid">
              {questionGrid.map((num) => (
                <div
                  key={num}
                  className={`grid-item ${num === currentQuestion ? "active" : ""} ${
                    selectedAnswers[num] !== undefined || essayAnswers[num] ? "answered" : ""
                  }`}
                  onClick={() => setCurrentQuestion(num)}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="test-sidebar-column">
          <div className="sidebar-card summary-card">
            <h3>Test Summary</h3>
            <p className="sub-text">Progress made</p>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-stats">
              <span>Questions answered</span>
              <span className="stats-value">{answeredCount}</span>
            </div>
            <button className="btn-end-test" onClick={() => setShowExitModal(true)}>
              End Test
            </button>
          </div>

          <div className="sidebar-card history-card">
            <h3>Your Test History</h3>
            <div className="history-list">
              {testHistory.map((item) => (
                <div key={item.id} className="history-item">
                  <div className={`history-icon-box ${item.status}`}>{item.icon}</div>
                  <div className="history-details"><p>{item.title}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="floating-chat"><FaCommentDots /></div>
    </div>
  );
}

export default EnglishTest;
