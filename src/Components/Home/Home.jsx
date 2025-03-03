import React from "react";
// import "./home.css"
import "../Home/home.css"

import { Link } from "react-router-dom";
import mlogo from "../Home/logo.png"

function Home() {
  return (
    <> <div className="main-box">
    <div className="div-icon"> <img src={mlogo} alt=""  className=" image-logo"/></div>
      <div className="home-nav">
        <h1 className = "nav-head">
          {" "}
          <Link to=""> HOME </Link>{" "}
        </h1>
        <h1 className = "nav-head">
          {" "}
          <Link to="/about"> ABOUT </Link>
        </h1>
        <h1 className = "nav-head">
          {" "}
          <Link to="/destination"> DESTINATION </Link>
        </h1>
        <h1 className = "nav-head">
          {" "}
          <Link to="/tour"> TOUR </Link>
        </h1>
        <h1 className = "nav-head">
          {" "}
          <Link to="/vlog"> VLOG </Link>
        </h1>
       
      </div>
      <div> <h1>
          {" "}
          <Link to="/book"> <button id="btn"> Sign Up</button> </Link>
        </h1></div>
        </div>
    </>
  );
}

export default Home;
