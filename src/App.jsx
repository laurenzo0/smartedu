import Navbar from "./components/reusableUi/Navbar/Navbar";
import Button from "./components/reusableUi/Button/Button";
import Login from "./components/pages/Login/Login";
import EngLearn from "./components/pages/Englishlearn/EngLearn";
import Learnpage from "./components/pages/Learnpage/Learnpage";
import DashBoard from "./components/pages/Dashboard/DashBoard";

import LandingPage from "./components/pages/LandingPage/LandingPage";
import PracticePage from "./components/pages/PracticePage/PracticePage.jsx";

import NarrowSidebar from "./components/reusableUi/Sidebar/NarrowSidebar"
import Sidebar from "./components/reusableUI/Sidebar/Sidebar";
import MathsLearn from "./components/pages/Mathslearn/MathsLearn";

function App() {
  return (
    <>
      {/* <div className="app-layout">
        <Sidebar />
        <NarrowSidebar /> 

        {/*<div className="main-section">
            <Navbar />
            <LandingPage />
        </div>    
      </div> */}
      {/* <Login />  */}
       {/* <PracticePage /> */}
       {/* <NarrowSidebar />  */}
        {/* <LandingPage /> */}
        {/* <EngLearn /> */}
        {/* <MathsLearn /> */}
        <DashBoard />
    </>
  );
}

export default App;
