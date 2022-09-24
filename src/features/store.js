import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import doctorSlice from "./doctorSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    doctor: doctorSlice,
  },
});

export default store;
