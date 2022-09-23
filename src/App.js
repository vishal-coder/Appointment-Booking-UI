import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Single from "./components/Single";
import createpost from "./components/CreatePost.js";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RegistrationSuccess from "./components/RegistrationSuccess";
import ResetPassword from "./components/ResetPassword";
import VerifyEmail from "./components/VerifyEmail";
import VerifyToken from "./components/VerifyToken";
import ForgotPassword from "./components/ForgotPassword.js";

import Header from "./components/Header.js";

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
