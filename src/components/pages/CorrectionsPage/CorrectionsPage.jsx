import React from "react";
import "./CorrectionsPage.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { FaCheckCircle, FaTimesCircle, FaArrowLeft } from "react-icons/fa";

function CorrectionsPage({ score, subject = "Mathematics", topic = "Number & Numeration", selectedAnswers = {}, onNavigate }) {
  
  // These lists must match EnglishTest.jsx exactly to show the right corrections
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
      text: "Why was Alade surprised at the news?",
      options: ["A. He was the most brilliant student.", "B. He was not the most brilliant but was chosen.", "C. He did not want to go to Britain.", "D. He had no passport."],
      correctAnswer: 1
    }
  ];

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

  const getQuestions = () => {
    const sub = subject.toLowerCase();
    if (sub.includes("math")) return mathQuestions;
    if (sub.includes("computer")) return computerQuestions;
    return englishQuestions;
  };

  const questions = getQuestions();

  return (
    <div className="corrections-page-container">
      <Navbar />
      
      <div className="corrections-content">
        <header className="corrections-header">
          <button className="btn-back" onClick={() => onNavigate("practice")}>
            <FaArrowLeft /> Back to Practice
          </button>
          <h1>Test Corrections: <span className="highlight">{subject}</span></h1>
          <p className="subtitle">{topic} • Final Score: {score}%</p>
        </header>

        <div className="corrections-list">
          {questions.map((q, idx) => {
            const qNum = idx + 1;
            const userAnsIdx = selectedAnswers[qNum];
            const isCorrect = userAnsIdx === q.correctAnswer;
            const skipped = userAnsIdx === undefined;

            return (
              <div key={idx} className={`correction-card ${skipped ? "skipped" : isCorrect ? "correct" : "incorrect"}`}>
                <div className="card-header">
                  <span className="q-number">Question {qNum}</span>
                  {skipped ? (
                    <span className="status-label skipped">Skipped</span>
                  ) : isCorrect ? (
                    <span className="status-label correct"><FaCheckCircle /> Correct</span>
                  ) : (
                    <span className="status-label incorrect"><FaTimesCircle /> Incorrect</span>
                  )}
                </div>

                <p className="q-text">{q.text}</p>

                <div className="options-feedback">
                  {q.options.map((opt, optIdx) => {
                    let optClass = "";
                    if (optIdx === q.correctAnswer) optClass = "is-correct";
                    if (optIdx === userAnsIdx && !isCorrect) optClass = "is-user-wrong";

                    return (
                      <div key={optIdx} className={`feedback-option ${optClass}`}>
                        {opt}
                        {optIdx === q.correctAnswer && <FaCheckCircle className="check-icon" />}
                        {optIdx === userAnsIdx && !isCorrect && <FaTimesCircle className="times-icon" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CorrectionsPage;
