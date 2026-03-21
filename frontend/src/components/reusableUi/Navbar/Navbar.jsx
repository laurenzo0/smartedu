import React from "react";
import "./Navbar.css";
import { FaSearch, FaBell, FaUser, FaSlidersH } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-icons">
        <div className="icon-box">
          <FaBell />
        </div>

        <div className="icon-box">
          <FaUser />
        </div>

        <div className="icon-box">
          <FaSlidersH />
        </div>
      </div>

    </div>
  );
};

export default Navbar;