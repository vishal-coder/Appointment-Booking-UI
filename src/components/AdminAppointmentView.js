import MUIDataTable from "mui-datatables";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAppointments,
  updateAppointments,
} from "../services/AppointmentService";
import { formatDate } from "../services/UtilityService.js";

function AdminAppointmentView() {
  const dispatch = useDispatch();
  const [aptList, setAptList] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    async function getData() {
      const response = await getAppointments(
        { email: user.email, userType: user.userType },
        user.token
      );
      console.log("resonse of get appointments", response);
      setAptList(response.list);
    }
    getData();
  }, []);

  const handleUpdateStatus = async (value) => {
    // console.log(value.rowData[5]);
    // return;

    const response = await updateAppointments({
      _id: value,
      status: "cancelled",
    });
    const updatedList = aptList.filter((item) => {
      return item._id === value ? (item.status = "Cancelled") : item;
    });
    if (response.success) {
      toast.success(response.message);
      setAptList(updatedList);
    } else {
      toast.warning("Please try again later");
    }
  };

  const columns = [
    {
      name: "_id",
      label: "id",
      options: {
        filter: true,
        sort: true,
        display: false,
      },
    },
    {
      name: "doctor_name",
      label: "Doctor Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "bookedBy",
      label: "Patient Name ",
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "date",
      label: "Date",
      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "slot",
      label: "Slot",

      options: {
        filter: true,
        sort: false,
      },
    },

    {
      name: "createdOn",
      label: "Created On ",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          return formatDate(value);
        },
      },
    },
    {
      name: "status",
      label: "Status ",
      options: {
        filter: true,
        sort: false,
      },
    },

    // {
    //   name: "",
    //   label: "Action",
    //   options: {
    //     filter: true,
    //     sort: false,
    //     customBodyRender: (value, tableMeta, updateValue) => {
    //       return tableMeta.rowData[5] != "cancelled" ? (
    //         <button
    //           onClick={(e) => {
    //             handleUpdateStatus(tableMeta.rowData[0]);
    //           }}
    //         >
    //           Cancel
    //         </button>
    //       ) : (
    //         "No action"
    //       );
    //     },
    //   },
    // },
  ];

  const options = {
    selectableRows: false,
    print: false,
  };

  return (
    <div className="listdashboard">
      {aptList && aptList.length > 0 ? (
        <MUIDataTable
          title={"Appoointment List"}
          data={aptList}
          columns={columns}
          options={options}
        />
      ) : (
        "it seems that list is empty.."
      )}
    </div>
  );
}
export default AdminAppointmentView;
