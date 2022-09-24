import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { deleteDoctor, getDoctorList } from "../services/DoctorServices.js";
import { setdoctorList } from "../features/doctorSlice.js";
// import "./css/AdminDoctorList.css";

function AdminDoctorList() {
  const dispatch = useDispatch();
  //   const [doctorList, setDoctorList] = useState(null);
  const { doctorList } = useSelector((state) => state.doctor);

  //   useEffect(() => {
  //     async function getData() {
  //       const response = await getDoctorList();
  //       setDoctorList(response.doctors);
  //     }
  //     getData();
  //   }, []);

  const handleDelete = async (email) => {
    console.log(email);
    const updatedList = doctorList.filter((item, index) => {
      return item.email != email;
    });
    dispatch(setdoctorList(updatedList));

    console.log("updatedList", updatedList);
    const response = await deleteDoctor({ email: email });
    if (response.success) {
      toast.success("User deleted successfully");
    } else {
      toast.warning("Please try again later");
    }
  };

  const columns = [
    {
      name: "firstname",
      label: "Firstname",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastname",
      label: "Lastname",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "email",
      label: "Email",
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "education",
      label: "Education",

      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "experience",
      label: "Experience ",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "department",
      label: "Department ",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "",
      label: "Action",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              onClick={(e) => {
                handleDelete(tableMeta.rowData[2]);
              }}
            >
              Delete
            </button>
          );
        },
      },
    },
  ];

  const options = {
    selectableRows: false,
    print: false,
  };

  return (
    <div className="listdashboard">
      {doctorList && doctorList.length > 0 ? (
        <MUIDataTable
          title={"Doctor List"}
          data={doctorList}
          columns={columns}
          options={options}
        />
      ) : (
        "it seems that list is empty.."
      )}
    </div>
  );
}

export default AdminDoctorList;
