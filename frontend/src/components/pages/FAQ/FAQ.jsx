import React, { useState } from "react";
import "./FAQ.css";
import Navbar from "../../reusableUi/Navbar/Navbar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is SmartEdu about?",
      answer: "SmartEdu is a learning platform designed to help students excel in their studies through interactive lessons and practice tests."
    },
    {
      question: "Is the app free to use?",
      answer: "Yes, SmartEdu offers a free tier with essential learning materials, though some advanced features may require a subscription."
    },
    {
      question: "Can I use the app offline?",
      answer: "Currently, an internet connection is required to sync your progress and access live lessons."
    },
    {
      question: "Who is the app for?",
      answer: "The app is designed for students of all ages looking to improve their knowledge in core subjects like Mathematics, English, and Computer Science."
    },
    {
      question: "How does progress tracking work?",
      answer: "We track your scores in practice tests and lessons to provide a detailed report card showing your strengths and areas for improvement."
    },
    {
      question: "What subjects are available?",
      answer: "We currently offer Mathematics, English Language, and Computer Science, with more subjects coming soon."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely! You can revisit lessons and retake practice tests as many times as you need."
    },
    {
      question: "Is my data safe?",
      answer: "We take your privacy seriously and use industry-standard encryption to protect your personal information."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="faq-container">
      <Navbar />

      <section className="faq-banner">
        <div className="faq-banner-content">
          <div className="banner-text">
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about SmartEdu</p>
          </div>
          <div className="banner-illustration">
             {/* Simple representing SVG or icon for the illustration */}
             <div className="ques-illustration">
                <span className="bulb">💡</span>
                <span className="person">👤</span>
                <span className="ques-mark">?</span>
             </div>
          </div>
        </div>
      </section>

      <section className="faq-questions-section">
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                {activeIndex === index ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="faq-feedback-section">
        <h3>Send Feedback</h3>
        <p>Didn't find what you were looking for? Send us a question or feedback</p>
        
        <form className="feedback-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea placeholder="Enter your message here..."></textarea>
          </div>
          <button type="submit" className="feedback-submit-btn">Send Feedback</button>
        </form>
      </section>

      <footer className="faq-footer">
        <p>2026 SmartEdu. All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default FAQ;
