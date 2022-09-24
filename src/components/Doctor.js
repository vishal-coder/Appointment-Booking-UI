import "./css/doctor.css";
import { PersonCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="doctor">
      <PersonCircle className="doctorimg" />
      <div className="doctorinfo">
        <div className="doctorcat">
          <div>Dept:- {doctor.department}</div>
          <div className="exp"> Exp: {doctor.experience} years</div>
        </div>
        <span className="doctortitle">
          {doctor.firstname} <span></span>
          {doctor.lastname}
          <samp className="education"> {doctor.education}</samp>
        </span>
      </div>
      <p className="doctordescription">
        Very Experience doctor with Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Iste quam, vitae et quia eaque aut obcaecati ea. Sequi
        corporis, nam at, repellat placeat doloribus vitae incidunt numquam
        deleniti corrupti rem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sapiente architecto dolores officiis doloremque natus
        delectus voluptatem quae placeat possimus doloribus! Optio repellendus
        sed saepe nihil ea, rerum expedita repellat obcaecati. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Molestias, ipsa natus, sequi odit
        earum perferendis neque amet quam repellat adipisci, repellendus eum
        laborum accusamus dolor quae! At itaque expedita ab.
      </p>
      {user && (
        <Button
          variant="warning"
          type="submit"
          className=""
          onClick={() => {
            navigate(`/bookAppointment/${doctor._id}`);
          }}
        >
          Book Appointment
        </Button>
      )}
    </div>
  );
}

export default Doctor;
