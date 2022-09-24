import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctorList: [],
  },
  reducers: {
    setdoctorList: (state, action) => {
      state.doctorList = action.payload;
    },

    addNewdoctor: (state, action) => {
      state.doctorList.push({ ...action.payload });
    },
    addEditeddoctor: (state, action) => {
      const editedList = state.doctorList.map(function (item) {
        return item._id == action.payload._id ? action.payload : item;
      });
      state.doctorList = editedList;
    },
    removedoctor: (state, action) => {
      const updatddoctorList = state.doctorList.filter(
        (item) => item._id != action.payload._id
      );
      state.doctorList = updatddoctorList;
    },
  },
});

export default doctorSlice.reducer;

export const { setdoctorList, addNewdoctor, addEditeddoctor, removedoctor } =
  doctorSlice.actions;
