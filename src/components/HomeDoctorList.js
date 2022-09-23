import React from "react";
import "./css/doctorlist.css";
import DoctorList from "./DoctorList.js";
import Sidebar from "./Sidebar.js";

function HomeDoctorList() {
  return (
    <div className="homedoctorlist">
      <Sidebar />
      <DoctorList />
    </div>
  );
}

export default HomeDoctorList;
