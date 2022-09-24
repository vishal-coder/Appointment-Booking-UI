import React from "react";
import { useEffect, useState } from "react";

import "./css/header.css";
import banner from "../images/banner.png";
import { useDispatch } from "react-redux";
import { setdoctorList } from "../features/doctorSlice";
import { getDoctorList } from "../services/DoctorServices";

function Header() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const response = await getDoctorList();
      dispatch(setdoctorList(response.doctors));
    }
    getData();
  }, []);
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
