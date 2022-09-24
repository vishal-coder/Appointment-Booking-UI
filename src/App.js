import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword.js";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import ResetPassword from "./components/ResetPassword";
import Single from "./components/Single";
import VerifyEmail from "./components/VerifyEmail";
import VerifyToken from "./components/VerifyToken";

import DoctorList from "./components/DoctorList";
import Header from "./components/Header.js";
import HomeDoctorList from "./components/HomeDoctorList";
import Admin from "./components/Admin";
import MyAppointments from "./components/MyAppointments";
import BookAppointment from "./components/BookAppointment.js";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="colored" />
      <Navbar />
      {/* <Header /> */}
      {/* <div className="separator"></div> */}
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singlePost" element={<Single />} />
        <Route path="/doctorList" element={<HomeDoctorList />} />
        <Route path="/doctorList/:category" element={<HomeDoctorList />} />
        <Route path="/List" element={<DoctorList />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route
          path="/bookAppointment/:doctorId"
          element={<BookAppointment />}
        />

        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="/verifyEmail/:token" element={<VerifyEmail />} />
        <Route path="/verifyToken" element={<VerifyToken />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <createpost /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
