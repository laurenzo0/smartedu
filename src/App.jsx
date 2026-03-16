import Navbar from "./components/reusableUi/Navbar/Navbar";

import "./App.css";
import Button from "./components/reusableUi/Button/Button";


import LandingPage from "./components/pages/LandingPage/LandingPage";

// import NarrowSidebar from "./components/reusableUi/Sidebar/NarrowSidebar"
import Sidebar from "./components/reusableUI/Sidebar/Sidebar";



function App() {
  return (
    <>
      <div className="app-layout">
        <Sidebar />
        {/* <NarrowSidebar /> */}

        <div className="main-section">
            <Navbar />
            <LandingPage />

        </div>
      </div>



    </>
  );
}

export default App;