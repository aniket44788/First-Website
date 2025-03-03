import React from "react";
import "./home.css"
import { Link } from "react-router-dom";
import mlogo from "../Home/logo.png"

function Home() {
  return (
    <> <div className="main-box">
    <div className="div-icon"> <img src={mlogo} alt=""  className=" image-logo"/></div>
      <div className="home-nav">
        <h1>
          {" "}
          <Link to=""> HOME </Link>{" "}
        </h1>
        <h1>
          {" "}
          <Link to="/about"> ABOUT </Link>
        </h1>
        <h1>
          {" "}
          <Link to="/destination"> DESTINATION </Link>
        </h1>
        <h1>
          {" "}
          <Link to="/tour"> TOUR </Link>
        </h1>
        <h1>
          {" "}
          <Link to="/vlog"> VLOG </Link>
        </h1>
       
      </div>
      <div className="button  "> <h1>
          {" "}
          <Link to="/book"> SIGN UP   </Link>
        </h1></div>
        </div>
    </>
  );
}

export default Home;
