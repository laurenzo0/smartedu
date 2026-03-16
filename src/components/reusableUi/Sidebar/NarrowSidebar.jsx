import logo2 from "../../../assets/logo1.png";
import "./NarrowSidebar.css";
import { FaThLarge, FaBook, FaFileAlt, FaChartBar, FaUser, FaEllipsisH } from "react-icons/fa";

function NarrowSidebar() {
  return (
    <div className="ns-sidebar">

      {/* Logo */}
      <div className="ns-logo">
        <img src={logo2} alt="Logo" />
      </div>

      {/* Menu Icons */}
      <div className="ns-menu-item">
        <div className="ns-slider"></div>
        <FaThLarge className="ns-icon" />
      </div>

      <div className="ns-menu-item">
        <div className="ns-slider"></div>
        <FaBook className="ns-icon" />
      </div>

      <div className="ns-menu-item">
        <div className="ns-slider"></div>
        <FaFileAlt className="ns-icon" />
      </div>

      <div className="ns-menu-item">
        <div className="ns-slider"></div>
        <FaChartBar className="ns-icon" />
      </div>

      <div className="ns-menu-item">
        <div className="ns-slider"></div>
        <FaUser className="ns-icon" />
      </div>

      <div className="ns-menu-item">
        <div className="ns-slider"></div>
        <FaEllipsisH className="ns-icon" />
      </div>

    </div>
  );
}

export default NarrowSidebar;