import React, { useEffect, useState } from "react";
import "./ResultPage.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { useUser } from "../../../contexts/UserContext";

function ResultPage({ score = 80, onNavigate, subject, topic, selectedAnswers }) {
  const { user } = useUser();
  const [offset, setOffset] = useState(628); // 2 * PI * r (r=100) -> approx 628
  
  useEffect(() => {
    // Progress calculation
    const progressOffset = 628 - (score / 100) * 628;
    const timer = setTimeout(() => {
      setOffset(progressOffset);
    }, 300); // slight delay for animation effect
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className="result-exam-container">
      <Navbar />

      <div className="result-exam-content">
        <div className="result-celebration-card">
          
          <div className="confetti-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`confetti-particle p${i}`}></div>
            ))}
          </div>

          <h1 className="congrats-title">Congratulations!</h1>
          <h2 className="congrats-name">{user?.first_name || 'Student'}</h2>

          <div className="circle-loader-container">
            <svg className="circular-chart" viewBox="0 0 240 240">
              <path
                className="circle-bg"
                d="M120 20
                   a 100 100 0 0 1 0 200
                   a 100 100 0 0 1 0 -200"
              />
              <path
                className="circle-fill"
                strokeDasharray="628"
                strokeDashoffset={offset}
                d="M120 20
                   a 100 100 0 0 1 0 200
                   a 100 100 0 0 1 0 -200"
              />
            </svg>
            <div className="circle-text">{score}%</div>
          </div>

          <div className="rank-unlock-section">
            <span className="rank-label">Expert Rank Unlocked</span>
            <span className="rank-badge-icon">🏅</span>
          </div>

          <div className="corrections-link-container">
            <button 
              className="btn-view-corrections" 
              onClick={() => onNavigate("corrections", { score, subject, topic, selectedAnswers })}
            >
              View Corrections
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ResultPage;
