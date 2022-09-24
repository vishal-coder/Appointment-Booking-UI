import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./css/doctorlist.css";
import Doctor from "./Doctor";

function DoctorList() {
  const { doctorList } = useSelector((state) => state.doctor);
  let { category } = useParams();

  return (
    <div className="doctorList">
      {doctorList && doctorList.length > 0 ? (
        doctorList
          .filter((doctor) => {
            if (category == "All") {
              return doctor;
            } else {
              return doctor.department === category;
            }
          })
          .map((doctor) => <Doctor key={doctor._id} doctor={doctor} />)
      ) : (
        <p>"It seems that list is empty"</p>
      )}
    </div>
  );
}

export default DoctorList;
