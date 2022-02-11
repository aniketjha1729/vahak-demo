import React from "react";
import banner from "../assets/icon.png";
import "./nav.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="bannerWrapper">
        <div className="banner">
          <img src={banner} alt="" />
        </div>
        <div className="bannerName">Vahak</div>
      </div>
    </div>
  );
};

export default Navbar;
