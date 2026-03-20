import Sidebar from "./components/reusableUi/Sidebar/Sidebar";
import Navbar from "./components/reusableUi/Navbar/Navbar";
import "./App.css";
import Button from "./components/reusableUi/Button/Button";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import ReportCard from "./components/pages/ReportCard/ReportCard";
import ResetLinkPage from "./components/pages/ResetLinkPage/ResetLinkPage";
import NewPasswordPage from "./components/pages/NewPasswordPage/NewPasswordPage";
import Learnpage from "./components/pages/Learnpage/Learnpage";
import PracticePage from "./components/pages/PracticePage/PracticePage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import EnglishTest from "./components/pages/EnglishTest/EnglishTest";
import ResultPage from "./components/pages/ResultPage/ResultPage";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import CorrectionsPage from "./components/pages/CorrectionsPage/CorrectionsPage";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [params, setParams] = useState({});

  const handleNavigate = (page, pageParams = {}) => {
    setCurrentPage(page);
    setParams(pageParams);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={handleNavigate} />;
      case "login":
        return <Login onNavigate={handleNavigate} />;
      case "signup":
        return <Signup onNavigate={handleNavigate} />;
      case "reset-password":
        return <ResetPassword onNavigate={handleNavigate} />;
      case "reset-link":
        return <ResetLinkPage onNavigate={handleNavigate} />;
      case "new-password":
        return <NewPasswordPage onNavigate={handleNavigate} />;
      case "learn":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <Learnpage onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "practice":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <PracticePage onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "report":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <ReportCard onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <ProfilePage onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "test":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <EnglishTest onNavigate={handleNavigate} {...params} />
            </div>
          </div>
        );
      case "result":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <ResultPage onNavigate={handleNavigate} {...params} />
            </div>
          </div>
        );
      case "corrections":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <CorrectionsPage onNavigate={handleNavigate} {...params} />
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <LandingPage onNavigate={handleNavigate} />
            </div>
          </div>
        );
      default:
        return <Signup onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;
