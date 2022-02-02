import React from "react";
import "./style.css";
import BackgroundVideo from "../../assets/greencode.mp4";

function BackgroundV() {
  return (
    <div className="fullpage">
      <video className="background" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default BackgroundV;
