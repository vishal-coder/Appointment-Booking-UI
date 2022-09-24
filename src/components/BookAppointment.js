import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./css/bookappointment.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatOnlyDate } from "../services/UtilityService";
import { addAppointment } from "../services/AppointmentService";
import { toast } from "react-toastify";

function BookAppointment() {
  const { doctorList } = useSelector((state) => state.doctor);
  const { user } = useSelector((state) => state.auth);

  const [startDate, setStartDate] = useState(new Date());
  const timeSlot = [
    "9:00 - 9:30",
    "9:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "12:00 - 12:30",
    "12:30 - 13:00",
    "13:00 - 13:30",
    "13:30 - 14:00",
    "18:00 - 18:30",
    "18:30 - 19:00",
    "19:00 - 19:30",
    "19:30 - 20:00",
    "20:00 - 20:30",
    "20:30 - 21:00",
  ];

  let { doctorId } = useParams();
  console.log("doctorId", doctorId);

  const doctor = doctorList.filter((doctor) => doctor._id == doctorId);
  let fullname = doctor[0].firstname + " " + doctor[0].lastname;
  const [name, setName] = useState(fullname);
  const [department, setDepartment] = useState(doctor[0].department);
  const [selectedSlot, setSelectedSlot] = useState("");

  console.log("doctor", name);
  console.log("doctor", department);
  console.log("doctor", doctor);

  console.log("startDate", formatOnlyDate(startDate));
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");
    if (selectedSlot == null || selectedSlot == "") {
      toast.warning("please select time slot");
      return;
    }
    const values = {
      date: formatOnlyDate(startDate),
      doctor_name: fullname,
      doctor_email: doctor[0].email,
      slot: selectedSlot,
      bookedBy: user.email,
    };
    console.log("values", values);
    const response = await addAppointment(values, user.token);
    if (response.success) {
      toast.success("Appointment booked successfully");
    } else {
      toast.warning(response.message);
    }
  };

  const handleSelectSlot = (index) => {
    console.log({ index });
    setSelectedSlot(timeSlot[index]);
  };
  return (
    <div className="bookAppointmentwrapper">
      <div className="appointmentFormDiv">
        <h4>Appointment Form</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicDoctorName">
            <Form.Label>Doctor Name</Form.Label>
            <Form.Control type="text" value={name} disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDepartment">
            <Form.Label>Department</Form.Label>
            <Form.Control
              type="text"
              placeholder="Department"
              value={department}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Select Date</Form.Label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              filterDate={(date) => date.getDay() != 0}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="appointmentSideDiv">
        <h4>Time Slot</h4>
        <ul>
          {timeSlot.map((slot, index) => (
            <li
              className={
                selectedSlot == timeSlot[index] ? "slotItem active" : "slotItem"
              }
              onClick={(e) => {
                handleSelectSlot(index);
              }}
            >
              {timeSlot[index]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BookAppointment;
