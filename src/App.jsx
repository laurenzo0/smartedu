import React, { useState } from "react";
import Sidebar from "./components/reusableUi/Sidebar/Sidebar";
import NarrowSidebar from "./components/reusableUi/Sidebar/NarrowSidebar";
import Navbar from "./components/reusableUi/Navbar/Navbar";
import Button from "./components/reusableUi/Button/Button";

import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import ReportCard from "./components/pages/ReportCard/ReportCard";
import ResetLinkPage from "./components/pages/ResetLinkPage/ResetLinkPage";
import NewPasswordPage from "./components/pages/NewPasswordPage/NewPasswordPage";

import DashBoard from "./components/pages/Dashboard/DashBoard";
import EngLearn from "./components/pages/Englishlearn/EngLearn";
import MathsLearn from "./components/pages/Mathslearn/MathsLearn";
import Learnpage from "./components/pages/Learnpage/Learnpage";
import PracticePage from "./components/pages/PracticePage/PracticePage";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <Login onNavigate={setCurrentPage} />;
      case "signup":
        return <Signup onNavigate={setCurrentPage} />;
      case "reset-password":
        return <ResetPassword onNavigate={setCurrentPage} />;
      case "reset-link":
        return <ResetLinkPage onNavigate={setCurrentPage} />;
      case "new-password":
        return <NewPasswordPage onNavigate={setCurrentPage} />;
      case "learn":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <Learnpage onNavigate={setCurrentPage} />
            </div>
          </div>
        );
      case "report":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <ReportCard onNavigate={setCurrentPage} />
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <DashBoard onNavigate={setCurrentPage} />
            </div>
          </div>
        );
      case "practice":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <PracticePage onNavigate={setCurrentPage} />
            </div>
          </div>
        );
      case "english":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <EngLearn onNavigate={setCurrentPage} />
            </div>
          </div>
        );
      case "maths":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <MathsLearn onNavigate={setCurrentPage} />
            </div>
          </div>
        );
      default:
        // Default to dashboard or login depending on flow
        return (
          <div className="app-layout">
            <Sidebar onNavigate={setCurrentPage} currentPage={currentPage} />
            <div className="main-section">
              <DashBoard onNavigate={setCurrentPage} />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;

