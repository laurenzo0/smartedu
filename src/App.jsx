import Navbar from "./components/reusableUi/Navbar/Navbar";
// import "./App.css";
import Button from "./components/reusableUi/Button/Button";
import Login from "./components/pages/Login/Login";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import PracticePage from "./components/pages/PracticePage/PracticePage.jsx";

// import NarrowSidebar from "./components/reusableUi/Sidebar/NarrowSidebar"
import Sidebar from "./components/reusableUI/Sidebar/Sidebar";

function App() {
  return (
    <>
      {/* <div className="app-layout">
        <Sidebar />
        {/* <NarrowSidebar /> */}

        {/*<div className="main-section">
            <Navbar />
            <LandingPage />
            <PracticePage />
        </div>
      </div> */}
      <Login />
    </>
  );
}

export default App;
