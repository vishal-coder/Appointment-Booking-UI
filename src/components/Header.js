import React from "react";

import "./css/header.css";
import banner from "../images/banner.png";

function Header() {
  return (
    <div className="header">
      <div className="headertitles">
        {/* <span className="headertitlemain">YOUR SMALL HELP CAN</span> */}
        <span className="headertitlSM">Best Hospital in the City</span>
      </div>
      <img className="headerimg" src={banner} alt="Bannner Image" />
    </div>
  );
}

export default Header;
