import React from "react";
import "./css/admindashboard.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AddDoctor from "./AddDoctor.js";
import AdminDoctorList from "./AdminDoctorList.js";

function Admin() {
  return (
    <div className="dashboardwrapper">
      <h2>Admin Dashboard</h2>
      <Tabs
        defaultActiveKey="doctors"
        id="justify-tab-example"
        className="mb-3 admintabs"
        justify
      >
        <Tab eventKey="add-doctor" title="Add Doctor">
          <AddDoctor />
        </Tab>
        <Tab eventKey="doctors" title="Doctor List">
          <AdminDoctorList />
        </Tab>
        <Tab eventKey="appointments" title="Appointments">
          {/* <ProductList /> */}
        </Tab>
      </Tabs>
    </div>
  );
}

export default Admin;
