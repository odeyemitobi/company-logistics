import React from "react";
import "../components.css";
import LOGO from "../../Assets/img/Logistic.png";

function TopNavBar() {
  return (
    <nav className="navbar-sec">
      <div className="logo-dsg">
        <img src={LOGO} alt="" />
      </div>

      <form className="search-sec">
        <input type="text" placeholder="Search..." />
      </form>
    </nav>
  );
}

export default TopNavBar;
