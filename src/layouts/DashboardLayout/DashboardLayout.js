import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import "../layouts.css";

function DashboardLayout({ children }) {
  return (
    <>
      <section className="">
        <TopNavBar />
        <div className="main-container">
          <SideBar />
          <div className="content-container">{children}</div>
        </div>
      </section>
    </>
  );
}

export default DashboardLayout;
