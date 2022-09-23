import "./css/doctor.css";
import { PersonCircle } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

function Doctor() {
  return (
    <div className="doctor">
      {/* <img className="doctorimg" src={profile} alt="Donate Image" /> */}
      <PersonCircle className="doctorimg" />
      <div className="doctorinfo">
        <div className="doctorcat">
          <div>Dept:- Department Name</div>
          <div className="exp"> Exp: 4 years</div>
        </div>
        <span className="doctortitle">
          {" "}
          Name of Doctor<samp className="education"> M.D.</samp>
        </span>
      </div>
      <p className="doctordescription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quam,
        vitae et quia eaque aut obcaecati ea. Sequi corporis, nam at, repellat
        placeat doloribus vitae incidunt numquam deleniti corrupti rem. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto
        dolores officiis doloremque natus delectus voluptatem quae placeat
        possimus doloribus! Optio repellendus sed saepe nihil ea, rerum expedita
        repellat obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Molestias, ipsa natus, sequi odit earum perferendis neque amet
        quam repellat adipisci, repellendus eum laborum accusamus dolor quae! At
        itaque expedita ab.
      </p>
      <Button variant="warning" type="submit" className="">
        Book Appointment
      </Button>
    </div>
  );
}

export default Doctor;
