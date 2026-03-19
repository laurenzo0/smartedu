import Sidebar from "./components/reusableUi/Sidebar/Sidebar";

import "./App.css";
import Button from "./components/reusableUi/Button/Button";


import LandingPage from "./components/pages/LandingPage/LandingPage";
import Learnpage from "./components/pages/Learnpage/Learnpage";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";
import ResetPassword from "./components/pages/ResetPassword/ResetPassword";
import ReportCard from "./components/pages/ReportCard/ReportCard";
import ResetLinkPage from "./components/pages/ResetLinkPage/ResetLinkPage";
import NewPasswordPage from "./components/pages/NewPasswordPage/NewPasswordPage";
import React, { useState } from "react";

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
      default:
        return <Signup onNavigate={setCurrentPage} />;
    }
  };

  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;