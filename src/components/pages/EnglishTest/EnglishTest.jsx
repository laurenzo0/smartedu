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
  const totalQuestions = subject.toLowerCase().includes("english") ? 60 : 30;
  
  const [timeLeft, setTimeLeft] = useState(() => {
    return subject.toLowerCase().includes("english") ? 120 * 60 : 15 * 60;
  });
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

  const getSubjectColorClass = () => {
    const sub = subject.toLowerCase();
    if (sub.includes("math")) return "theme-orange";
    if (sub.includes("computer")) return "theme-green";
    return "theme-blue"; // Default for English
  };

  const themeClass = getSubjectColorClass();

  // Expanded Mock Data
  const englishQuestions = [
    { type: "mcq", text: "The expression 'to beat around the bush' means to:", options: ["A. Speak indirectly about an issue", "B. Fight in the forest", "C. Avoid the bush", "D. Run away from trouble"] },
    { type: "mcq", text: "Select the word that is nearest in meaning to 'Audacious':", options: ["A. Cowardly", "B. Bold", "C. Loud", "D. Silent"] },
    { type: "mcq", text: "Choose the correct spelling:", options: ["A. Accomodation", "B. Accommodation", "C. Acommodation", "D. Acomodation"] },
    { type: "mcq", text: "Which of the following sentences is grammatically correct?", options: ["A. He don't know the answer.", "B. He doesn't knows the answer.", "C. He doesn't know the answer.", "D. He do not knows the answer."] },
    { type: "mcq", text: "Select the antonym for 'Abundant':", options: ["A. Plentiful", "B. Scarce", "C. Enough", "D. Overflowing"] },
    { type: "mcq", text: "What is the synonym of 'Diligent'?", options: ["A. Lazy", "B. Hardworking", "C. Sleepy", "D. Arrogant"] },
    { type: "mcq", text: "Choose the appropriate proposition: He is good ___ Mathematics.", options: ["A. in", "B. with", "C. at", "D. on"] },
    { type: "mcq", text: "Which is a noun in this sentence: 'The quickly running fox jumped.'?", options: ["A. quickly", "B. running", "C. fox", "D. jumped"] },
    { type: "mcq", text: "Find the error: 'One of the student is absent today.'", options: ["A. One", "B. student", "C. is", "D. today"] },
    { type: "mcq", text: "To 'let the cat out of the bag' means:", options: ["A. Reveal a secret", "B. Save an animal", "C. Hide a mistake", "D. Cry loudly"] },
    { type: "mcq", text: "What is the plural of 'Criterion'?", options: ["A. Criterions", "B. Criteria", "C. Criterias", "D. Critters"] },
    { type: "mcq", text: "What figure of speech is 'The camera loves her'?", options: ["A. Simile", "B. Metaphor", "C. Personification", "D. Hyperbole"] },
    { type: "mcq", text: "Identify the tense: 'I will have finished by 5 PM.'", options: ["A. Future Perfect", "B. Past Perfect", "C. Simple Future", "D. Future Continuous"] },
    { type: "mcq", text: "What does 'Omnipresent' mean?", options: ["A. Knows everything", "B. Present everywhere", "C. All powerful", "D. Does everything"] },
    {
      type: "mcq",
      hasPassage: true,
      passage: "Alade was overjoyed. What had happened was very rare in the history of the institution. He was brilliant and did well in his studies, but he was not the over-brilliant in the college; at least, he knew about three of his coursemates whose grade points had been exceptional. Yet, here he was, being favoured above those students. He could not believe his luck.\n\nBut it was no dream at all! On that Monday morning, his head of department summoned him, and this was quite unusual. He was full of trepidation as he went to see the head of department who looked at Alade solemnly and enquired about his parents and his studies...\n\n\"Well, I'm happy to hear that,\" replied the head of department. He proceeded, \"I have been directed to inform you that you have been selected to attend an exchange programme which offers opportunities for participants to work together in solving shared problems that endanger the future of the youth. You will be leaving with other students from various institutions in a week's time. Do you have a passport?\"\n\n\"Yes, sir, I do.\" Alade confirmed.\n\n\"Very well. Then get ready to leave for a six-month programme in Britain.\"",
      text: "Why was Alade surprised at the news?",
      options: ["A. He was the most brilliant student.", "B. He was not the most brilliant but was chosen.", "C. He did not want to go to Britain.", "D. He had no passport."]
    }
  ];

  const mathQuestions = [
    { type: "mcq", text: "What is the decimal value (base-10) of the number 1011₂ (base-2)?", options: ["A. 9", "B. 11", "C. 13", "D. 15"] },
    { type: "mcq", text: "Solve for x: 2x + 5 = 15", options: ["A. 5", "B. 10", "C. 15", "D. 20"] },
    { type: "mcq", text: "What is the square root of 144?", options: ["A. 10", "B. 12", "C. 14", "D. 16"] },
    { type: "mcq", text: "Find the area of a circle with radius 7cm (take π=22/7):", options: ["A. 154 cm²", "B. 44 cm²", "C. 144 cm²", "D. 22 cm²"] },
    { type: "mcq", text: "Simplify: 3(x + 2) - 2x", options: ["A. x + 6", "B. 5x + 6", "C. x - 6", "D. 5x - 6"] },
    { type: "mcq", text: "What is 15% of 200?", options: ["A. 15", "B. 20", "C. 30", "D. 45"] },
    { type: "mcq", text: "Solve: 8 ÷ 2(2 + 2) = ?", options: ["A. 1", "B. 16", "C. 8", "D. 4"] },
    { type: "mcq", text: "If a triangle has angles 90° and 45°, what is the third angle?", options: ["A. 30°", "B. 45°", "C. 60°", "D. 90°"] },
    { type: "mcq", text: "Convert 0.75 to a fraction:", options: ["A. 1/2", "B. 3/4", "C. 2/3", "D. 4/5"] },
    { type: "mcq", text: "If 5 pencils cost $10, how much do 12 pencils cost?", options: ["A. $24", "B. $20", "C. $12", "D. $25"] },
    { type: "mcq", text: "Which number is a prime number?", options: ["A. 9", "B. 15", "C. 21", "D. 29"] },
    { type: "mcq", text: "What is the value of 5³?", options: ["A. 15", "B. 25", "C. 125", "D. 625"] },
    { type: "mcq", text: "What is the perimeter of a rectangle with length 8 and width 5?", options: ["A. 13", "B. 26", "C. 40", "D. 18"] },
    { type: "mcq", text: "Calculate the median of 2, 5, 8, 11, 14:", options: ["A. 5", "B. 8", "C. 11", "D. 6"] },
    { type: "mcq", text: "Expand: (x + 2)(x + 3)", options: ["A. x² + 6", "B. x² + 5x + 6", "C. 2x + 5", "D. x² + x + 6"] }
  ];

  const computerQuestions = [
    { type: "mcq", text: "What does CPU stand for?", options: ["A. Central Processing Unit", "B. Computer Personal Unit", "C. Central Processor Unit", "D. Control Processing Unit"] },
    { type: "mcq", text: "Which of the following is an input device?", options: ["A. Monitor", "B. Printer", "C. Keyboard", "D. Speaker"] },
    { type: "mcq", text: "What does RAM stand for?", options: ["A. Random Access Memory", "B. Read Only Memory", "C. Random Active Memory", "D. Read Access Memory"] },
    { type: "mcq", text: "Which of the following is an operating system?", options: ["A. Microsoft Word", "B. Linux", "C. Google Chrome", "D. Python"] },
    { type: "mcq", text: "In computing, what is a bit?", options: ["A. A single binary digit (0 or 1)", "B. 8 bytes", "C. A small piece of data", "D. A network protocol"] },
    { type: "mcq", text: "What does HTTP stand for?", options: ["A. HyperText Transfer Protocol", "B. HyperLink Transfer Protocol", "C. HyperText Transmission Protocol", "D. Hyper Terminal Transfer Protocol"] },
    { type: "mcq", text: "Which language is primarily used for web styling?", options: ["A. HTML", "B. Python", "C. CSS", "D. C++"] },
    { type: "mcq", text: "What is a motherboard?", options: ["A. A software program", "B. The main circuit board", "C. An input device", "D. A power supply"] },
    { type: "mcq", text: "What does GUI stand for?", options: ["A. Graphical User Interface", "B. General Utility Interface", "C. Graphic Unit Integration", "D. General User Interface"] },
    { type: "mcq", text: "What is phishing?", options: ["A. A new programming language", "B. A cyber-attack to steal data", "C. A hardware device", "D. A network error"] },
    { type: "mcq", text: "Which component is known as the brain of the computer?", options: ["A. RAM", "B. Hard Drive", "C. CPU", "D. Monitor"] },
    { type: "mcq", text: "What is cloud computing?", options: ["A. Weather predicting servers", "B. Storing data over the internet", "C. Local hardware storage", "D. Wireless keyboards"] },
    { type: "mcq", text: "Which is a volatile memory?", options: ["A. ROM", "B. Hard Disk", "C. SSD", "D. RAM"] },
    { type: "mcq", text: "What does IP stand for in 'IP Address'?", options: ["A. Internet Provider", "B. Internal Process", "C. Internet Protocol", "D. International Protocol"] },
    { type: "mcq", text: "What is an algorithm?", options: ["A. A computer component", "B. A step-by-step procedure to solve a problem", "C. A type of virus", "D. A database"] }
  ];

  const getMockQuestion = () => {
    const isEnglish = subject.toLowerCase().includes("english");
    const isMath = subject.toLowerCase().includes("math");
    const isComputer = subject.toLowerCase().includes("computer");

    if (isEnglish && currentQuestion > 50) {
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

    let arr = englishQuestions;
    if (isMath) arr = mathQuestions;
    if (isComputer) arr = computerQuestions;

    // Cycle through questions based on currentQuestion
    return arr[(currentQuestion - 1) % arr.length];
  };

  const currentData = getMockQuestion();

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
    { title: "Software & Systems Test 3 (55%)- Completed", icon: <FaDesktop />, color: "#28a745" },
  ];

  const getTopicSubtitle = () => {
    if (subject.toLowerCase().includes("math")) return "How well do you know how to work with numbers?";
    if (subject.toLowerCase().includes("computer")) return "If you want to be a tech bro/sis, here's your head start.";
    return "How well can you use the right words and tenses?";
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
                <span className="subject-name">{subject}</span> {subject.toLowerCase() === "english" ? "EXAMINATION" : "Test"} - <span className="topic-name">{topic}</span>
              </h1>
              <p>{getTopicSubtitle()}</p>
              {subject.toLowerCase() === "english" && (
                <p className="essay-notice">N.B. - Questions 51-60 are <strong>essay questions</strong> in which answers would be typed.</p>
              )}
            </div>
            <div className="test-header-image">
              <img src="/src/assets/images/student-kid.avif" alt="Illustration" />
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
                onClick={() => onNavigate("result", { score: 80, subject, topic })}
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
