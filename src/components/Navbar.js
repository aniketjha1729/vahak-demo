import React from "react";
import Icon from "../assets/icon.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">
        <div className="brandIcon">
          <img src={Icon} />
        </div>
        <div className="brandName">Vahak</div>
      </div>
    </div>
  );
};

export default Navbar;
