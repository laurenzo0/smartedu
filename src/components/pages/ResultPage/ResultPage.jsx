import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import { FaTrophy, FaRedo, FaHome, FaChevronRight } from "react-icons/fa";

function ResultPage({ score = 65, subject = "Mathematics", topic = "Number & Numeration", onNavigate }) {
  const [offset, setOffset] = useState(440); // 2 * PI * r (r=70)
  
  useEffect(() => {
    const progressOffset = 440 - (score / 100) * 440;
    const timer = setTimeout(() => {
      setOffset(progressOffset);
    }, 100);
    return () => clearTimeout(timer);
  }, [score]);

  const getRankData = () => {
    if (score >= 80) return { title: `Expert in ${subject}`, icon: "🏆", color: "#2D6A4F" };
    if (score >= 60) return { title: `Advanced in ${subject}`, icon: "🎖️", color: "#ED810E" };
    return { title: `Keep Practicing ${subject}`, icon: "📚", color: "#64748B" };
  };

  const [showCorrections, setShowCorrections] = useState(false);
  
  const rank = getRankData();
  const isCongratulations = score >= 60;

  // Mock corrections data
  const corrections = [
    { q: "What is the value of pi?", user: "3.12", correct: "3.14", isCorrect: false },
    { q: "Capital of France?", user: "Paris", correct: "Paris", isCorrect: true },
    { q: "Square root of 256?", user: "14", correct: "16", isCorrect: false },
  ];

  return (
    <div className="result-container">
      <div className="result-card">
        {isCongratulations && (
          <div className="confetti-wrapper">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`confetti-piece p${i}`}></div>
            ))}
            <div className="congrats-text">Congratulations!</div>
            <div className="user-name">Aragon</div>
          </div>
        )}

        {!isCongratulations && (
          <h2 className="score-header">FOR THIS TEST, YOU SCORED:</h2>
        )}

        <div className="progress-circle-wrapper">
          <svg className="progress-svg" width="200" height="200">
            <circle
              className="progress-bg"
              cx="100"
              cy="100"
              r="70"
            />
            <circle
              className="progress-bar"
              cx="100"
              cy="100"
              r="70"
              style={{ strokeDashoffset: offset }}
            />
          </svg>
          <div className="percentage-text">{score}%</div>
        </div>

        {isCongratulations && (
          <div className="rank-badge">
            <span className="rank-text">{rank.title}</span>
            <span className="rank-icon">{rank.icon}</span>
          </div>
        )}

        <div className="result-actions">
          <button className="view-corrections" onClick={() => setShowCorrections(!showCorrections)}>
            {showCorrections ? "Hide Corrections" : "View Corrections"}
          </button>
          
          {showCorrections && (
            <div className="corrections-list">
              {corrections.map((item, idx) => (
                <div key={idx} className={`correction-item ${item.isCorrect ? "correct" : "incorrect"}`}>
                  <p className="correction-q">Q: {item.q}</p>
                  <p className="correction-ans">Your Answer: <span className="u-ans">{item.user}</span> | Correct: <span className="c-ans">{item.correct}</span></p>
                </div>
              ))}
            </div>
          )}
          
          {!isCongratulations && (
            <div className="mastery-link" onClick={() => onNavigate("practice")}>
              Click here to gain more mastery on <span className="topic-name">{topic}</span>
            </div>
          )}
        </div>

        <div className="bottom-navigation">
          <button className="btn-secondary" onClick={() => onNavigate("practice")}>
            <FaHome /> Back to Dashboard
          </button>
          <button className="btn-primary" onClick={() => onNavigate("practice")}>
            Try Another Subject <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
