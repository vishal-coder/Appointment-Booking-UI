import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDoctorList } from "../services/DoctorServices";
import "./css/doctorlist.css";
import Doctor from "./Doctor";

function DoctorList() {
  const { doctorList } = useSelector((state) => state.doctor);

  console.log("docotrlist", doctorList);
  return (
    <div className="doctorList">
      {doctorList && doctorList.length > 0 ? (
        doctorList.map((doctor) => <Doctor doctor={doctor} />)
      ) : (
        <p>"It seems that list is empty"</p>
      )}
    </div>
  );
}

export default DoctorList;
