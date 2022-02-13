import React from "react";
import "./header.css";

const Header = ({ heading }) => {
  return (
    <div className="header">
      <div className="formHeading">{heading}</div>
    </div>
  );
};

export default Header;
