import React from "react";
import "../Content/content.css";
import Contentvideo from "../Content/Content.mp4";

function Content1() {
  return (
    <>
      <div className="main-content-head">
        <div className="are-you-fit">
          <video autoPlay muted loop className="content-video">
            <source src={Contentvideo} />
          </video>
          <div className="video-text-overlay">GET FIT WITH THESE EXERCISES</div>{" "}
        </div>
      </div>
      <div className="maincontent">
        <div className="main-content-1"></div>
      </div>
    </>
  );
}

export default Content1;
