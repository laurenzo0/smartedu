<<<<<<< HEAD
import LandingPage from "./components/pages/LandingPage/LandingPage";
import PracticePage from "./components/pages/PracticePage/PracticePage.jsx";


function App() {
    return (
        <>
            <LandingPage />
            {/* <PracticePage /> */}
        </>
    );
}

export default App;
=======
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
>>>>>>> 35de45701ebb84739a65b34d478e7dc8017d224e
