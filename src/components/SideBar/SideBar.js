import React, { useState } from "react";
import "../components.css";
import { SidebarData } from "../../utilis/SidebarData";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <nav className={sidebar ? "nav-menu2 active" : "nav-menu2"}>
      <ul className="nav-menu-items">
        {SidebarData.map((item, index) => {
          return (
            <NavLink key={index + "data"} to={item.path}>
              <div className="customer-sec">
                <li key={index} className={item.cName}>
                  {item.icon}
                  <span>{item.title}</span>
                </li>
              </div>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
