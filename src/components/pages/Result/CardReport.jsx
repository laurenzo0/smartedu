import Sidebar from "../../reusableUi/Sidebar/Sidebar";
import Navbar from "../../reusableUi/Navbar/Navbar";
// import HelpButton from "../../reusableUi/HelpButton/HelpButton";
// import Footer from "../../reusableUi/Footer/Footer";

import StudentCard from "./StudentCard";
import StatsCard from "./StatsCard";
import Performance from "./Performance";
import Subjects from "./Subjects";

import "./CardReport.css"

function CardReport(){
  return(
    <div className="cardreport-wrapper">

      {/* <Sidebar/> */}

      <div className="cardreport-content">

        <Navbar/>

        <StudentCard/>

        <div className="shared-board">
          <StatsCard
          title="Total Tests Taken"
          value="300"
          english={100}
          maths={50}
          cs={150}
        />

        <StatsCard
          title="Total Tests Passed"
          value="150 / 300"
          english={50}
          maths={25}
          cs={75}
        />

        <Performance />

        <Subjects/>

        </div>
        {/* <Footer/> */}

      </div>

      {/* <HelpButton/> */}

    </div>
  )
}

export default CardReport;