import logo2 from "../../../assets/logo2.png";
import "./Sidebar.css";
import { FaThLarge, FaBook, FaFileAlt, FaChartBar, FaUser, FaEllipsisH } from "react-icons/fa";

function Sidebar(){
  return(
    <div className="sidebar">

      <div className="logo-section">
        <img src={logo2} alt="SmartEDu Logo" />
      </div>

      <div className="menu-item">
        <div className="slider"></div>
        <div className="icon-area">
          <FaThLarge className="icon"/>
          <span className="text">Dashboard</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="slider"></div>
        <div className="icon-area">
          <FaBook className="icon"/>
          <span className="text">Learn</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="slider"></div>
        <div className="icon-area">
          <FaFileAlt className="icon"/>
          <span className="text">Practice</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="slider"></div>
        <div className="icon-area">
          <FaChartBar className="icon"/>
          <span className="text">Report Card</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="slider"></div>
        <div className="icon-area">
          <FaUser className="icon"/>
          <span className="text">Profile</span>
        </div>
      </div>

      <div className="menu-item">
        <div className="slider"></div>
        <div className="icon-area">
          <FaEllipsisH className="icon"/>
          <span className="text">More</span>
        </div>
      </div>

    </div>
  )
}

export default Sidebar;