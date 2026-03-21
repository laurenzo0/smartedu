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
import LearnScreen from "./components/pages/Learnscreen/LearnScreen";
import Learnpage from "./components/pages/Learnpage/Learnpage";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import PracticePage from "./components/pages/PracticePage/PracticePage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import EnglishTest from "./components/pages/EnglishTest/EnglishTest";
import MathsTest from "./components/pages/MathsTest/MathsTest";
import ComputerTest from "./components/pages/ComputerTest/ComputerTest";
import ResultPage from "./components/pages/ResultPage/ResultPage";
import CorrectionsPage from "./components/pages/CorrectionsPage/CorrectionsPage";
import CardReport from "./components/pages/Result/CardReport";
import Settings from "./components/pages/Settings/Settings";
import FAQ from "./components/pages/FAQ/FAQ";
import ParentReport from "./components/pages/ParentReport/ParentReport";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
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
              <LearnScreen onNavigate={handleNavigate} />
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
      case "settings":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <Settings onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "test": {
        let TestComponent = EnglishTest;
        if (params.subject?.toLowerCase().includes("math")) {
          TestComponent = MathsTest;
        } else if (params.subject?.toLowerCase().includes("computer")) {
          TestComponent = ComputerTest;
        }
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <TestComponent onNavigate={handleNavigate} {...params} />
            </div>
          </div>
        );
      }
      case "result":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <ResultPage onNavigate={handleNavigate} {...params} />
            </div>
          </div>
        );
      case "report-result": // Adding new remote route
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <CardReport onNavigate={handleNavigate} />
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
      case "faq":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <FAQ />
            </div>
          </div>
        );
      case "parent-report":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <ParentReport />
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <DashBoard onNavigate={handleNavigate} />
            </div>
          </div>
        );

      case "english":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <EngLearn onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "maths":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <MathsLearn onNavigate={handleNavigate} />
            </div>
          </div>
        );
      case "computer-science":
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <Learnpage onNavigate={handleNavigate} />
            </div>
          </div>
        );
      default:
        return (
          <div className="app-layout">
            <Sidebar onNavigate={handleNavigate} currentPage={currentPage} />
            <div className="main-section">
              <DashBoard onNavigate={handleNavigate} />
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
