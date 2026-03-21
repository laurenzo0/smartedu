import React, { useState, useEffect } from "react";
import "./EnglishTest.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { FaGraduationCap, FaDesktop, FaCommentDots } from "react-icons/fa";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaIndent,
} from "react-icons/fa";

function EnglishTest({ onNavigate, subject = "Mathematics", topic = "Number & Numeration" }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 60;
  
  const [timeLeft, setTimeLeft] = useState(120 * 60);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [essayAnswer, setEssayAnswer] = useState("");
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

  const themeClass = "theme-blue"; // Default for English

  // Expanded Mock Data
  const englishQuestions = [
    { type: "mcq", text: "The expression 'to beat around the bush' means to:", options: ["A. Speak indirectly about an issue", "B. Fight in the forest", "C. Avoid the bush", "D. Run away from trouble"], correctAnswer: 0 },
    { type: "mcq", text: "Select the word that is nearest in meaning to 'Audacious':", options: ["A. Cowardly", "B. Bold", "C. Loud", "D. Silent"], correctAnswer: 1 },
    { type: "mcq", text: "Choose the correct spelling:", options: ["A. Accomodation", "B. Accommodation", "C. Acommodation", "D. Acomodation"], correctAnswer: 1 },
    { type: "mcq", text: "Which of the following sentences is grammatically correct?", options: ["A. He don't know the answer.", "B. He doesn't knows the answer.", "C. He doesn't know the answer.", "D. He do not knows the answer."], correctAnswer: 2 },
    { type: "mcq", text: "Select the antonym for 'Abundant':", options: ["A. Plentiful", "B. Scarce", "C. Enough", "D. Overflowing"], correctAnswer: 1 },
    { type: "mcq", text: "What is the synonym of 'Diligent'?", options: ["A. Lazy", "B. Hardworking", "C. Sleepy", "D. Arrogant"], correctAnswer: 1 },
    { type: "mcq", text: "Choose the appropriate proposition: He is good ___ Mathematics.", options: ["A. in", "B. with", "C. at", "D. on"], correctAnswer: 2 },
    { type: "mcq", text: "Which is a noun in this sentence: 'The quickly running fox jumped.'?", options: ["A. quickly", "B. running", "C. fox", "D. jumped"], correctAnswer: 2 },
    { type: "mcq", text: "Find the error: 'One of the student is absent today.'", options: ["A. One", "B. student", "C. is", "D. today"], correctAnswer: 1 },
    { type: "mcq", text: "To 'let the cat out of the bag' means:", options: ["A. Reveal a secret", "B. Save an animal", "C. Hide a mistake", "D. Cry loudly"], correctAnswer: 0 },
    { type: "mcq", text: "What is the plural of 'Criterion'?", options: ["A. Criterions", "B. Criteria", "C. Criterias", "D. Critters"], correctAnswer: 1 },
    { type: "mcq", text: "What figure of speech is 'The camera loves her'?", options: ["A. Simile", "B. Metaphor", "C. Personification", "D. Hyperbole"], correctAnswer: 2 },
    { type: "mcq", text: "Identify the tense: 'I will have finished by 5 PM.'", options: ["A. Future Perfect", "B. Past Perfect", "C. Simple Future", "D. Future Continuous"], correctAnswer: 0 },
    { type: "mcq", text: "What does 'Omnipresent' mean?", options: ["A. Knows everything", "B. Present everywhere", "C. All powerful", "D. Does everything"], correctAnswer: 1 },
    {
      type: "mcq",
      hasPassage: true,
      passage: "Alade was overjoyed. What had happened was very rare in the history of the institution. He was brilliant and did well in his studies, but he was not the over-brilliant in the college; at least, he knew about three of his coursemates whose grade points had been exceptional. Yet, here he was, being favoured above those students. He could not believe his luck.\n\nBut it was no dream at all! On that Monday morning, his head of department summoned him, and this was quite unusual. He was full of trepidation as he went to see the head of department who looked at Alade solemnly and enquired about his parents and his studies...\n\n\"Well, I'm happy to hear that,\" replied the head of department. He proceeded, \"I have been directed to inform you that you have been selected to attend an exchange programme which offers opportunities for participants to work together in solving shared problems that endanger the future of the youth. You will be leaving with other students from various institutions in a week's time. Do you have a passport?\"\n\n\"Yes, sir, I do.\" Alade confirmed.\n\n\"Very well. Then get ready to leave for a six-month programme in Britain.\"",
      text: "Why was Alade surprised at the news?",
      options: ["A. He was the most brilliant student.", "B. He was not the most brilliant but was chosen.", "C. He did not want to go to Britain.", "D. He had no passport."],
      correctAnswer: 1
    }
  ];



  const getMockQuestionData = (qNum) => {
    if (qNum > 50) {
      return {
        type: "essay",
        text: "Answer any of the following essay topics in not more than 500 words:",
        essayPrompts: [
          "1. Write a letter to your friend in another school describing the end-of-year activities in your school.",
          "2. A youth club is organizing a series of talks meant to stimulate members to prepare adequately for the future. As a youth leader, you have been invited to give a talk on \"My dream for the future.\" Write your speech.",
          "3. There is a public outcry against electoral malpractice in your country. Write an article to be published in one of your national newspapers discussing at least three ways of stopping the trend.",
          "4. There has been a drastic fall in the quality of social amenities in your community. Write a letter to the Commissioner for Public Utilities stating the inconveniences your people have suffered as a result of this.",
          "5. Write a story that ends with the expression: \"It was indeed my lucky day.\""
        ]
      };
    }

    return englishQuestions[(qNum - 1) % englishQuestions.length];
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
    { title: "Lexis & Structure Test 1 (70%)- Completed", icon: <FaGraduationCap />, color: "#00A3FF" },
  ];

  const calculateScore = () => {
    let earnedPoints = 0;
    const mcqCount = 50;

    for (let i = 1; i <= mcqCount; i++) {
      const qData = getMockQuestionData(i);
      if (selectedAnswers[i] === qData.correctAnswer) {
        earnedPoints++;
      }
    }

    let finalScore = (earnedPoints / totalQuestions) * 100;
    
    // Add points for essay
    let essayScore = 0;
    if (essayAnswer.length > 50) essayScore = 16.6; 
    else if (essayAnswer.length > 10) essayScore = 8;
    finalScore += essayScore;

    if (finalScore > 100) finalScore = 100;
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
        {/* Left Column: Test Area */}
        <div className="test-main-area">
          {/* Header */}
          <div className="test-top-header">
            <div className="test-header-text">
              <h1>
                <span className="subject-name">{subject}</span> EXAMINATION - <span className="topic-name">{topic}</span>
              </h1>
              <p>How well can you use the right words and tenses?</p>
              <p className="essay-notice">N.B. - Questions 51-60 are <strong>essay questions</strong> in which answers would be typed.</p>
            </div>
            <div className="test-header-image">
              <img src="/assets/images/student-kid.avif" alt="Illustration" />
            </div>
          </div>

          <div className={`question-wrapper ${currentData.hasPassage ? "split-passage" : ""}`}>
            {currentData.hasPassage && (
              <div className="passage-section">
                <h3>Instructions:</h3>
                <p className="passage-instructions">Read the following passage carefully and answer the questions on it.</p>
                <div className="passage-text">
                   {currentData.passage.split('\n\n').map((para, i) => (
                     <p key={i}>{para}</p>
                   ))}
                </div>
              </div>
            )}

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

              {currentData.type === "mcq" ? (
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
              ) : (
                <div className="essay-section">
                  {currentData.essayPrompts && (
                    <div className="essay-prompts-list">
                      {currentData.essayPrompts.map((prompt, idx) => (
                        <p key={idx} className="essay-prompt-item">{prompt}</p>
                      ))}
                    </div>
                  )}
                  <div className="essay-editor">
                    <div className="editor-toolbar">
                      <FaBold /> <FaItalic /> <FaUnderline /> <div className="divider"></div>
                      <FaAlignLeft /> <FaAlignCenter /> <FaAlignRight /> <FaAlignJustify /> <div className="divider"></div>
                      <FaIndent />
                    </div>
                    <textarea 
                      value={essayAnswer} 
                      onChange={(e) => setEssayAnswer(e.target.value)} 
                    ></textarea>
                  </div>
                </div>
              )}

              <div className="test-nav-actions">
                <button className="btn-test-nav next" onClick={handleNext}>Next</button>
                {currentQuestion > 1 && (
                  <button className="btn-test-nav prev" onClick={handlePrevious}>Previous</button>
                )}
              </div>
            </div>
          </div>

          {/* Grid Area - NOW ALWAYS AT THE BOTTOM OF THE MAIN AREA */}
          {renderQuestionGrid()}
        </div>

        {/* Right Column: Sidebars */}
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

      {/* Exit Modal */}
      {showExitModal && (
        <div className="modal-overlay">
          <div className="exit-modal">
            <p>You clicked to end the test.<br/><strong>Are you sure?</strong></p>
            <div className="modal-buttons">
              <button 
                className="btn-modal yes" 
                onClick={() => {
                  const calculatedScore = calculateScore();
                  onNavigate("result", { 
                    score: calculatedScore, 
                    subject, 
                    topic,
                    selectedAnswers // Passing these for corrections view
                  });
                }}
              >
                Yes
              </button>
              <button 
                className="btn-modal no" 
                onClick={() => setShowExitModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default EnglishTest;
