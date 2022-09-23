import React from "react";
import Header from "./Header";
import "./css/home.css";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
