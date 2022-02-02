import React from "react";
import "./style.css";
import SerhiyImg2 from "../../assets/Serhiy2.jpg";
import SerhiyImg from "../../assets/Serhiy.jpg";

function AboutMe() {
  return (
    <div className="about-me-section">
      <div className="about-me-title">
        <h1>About me</h1>
      </div>
      <img className="about-me-img" src={SerhiyImg2} />
      <div className="about-me-description">
        <p className="about-me-p">
          My name is Serhiy Korotych, I'm a junior web developer, for the last 5
          months I have been honing my craft at the Wild Code School bootcamp.
          During those 5 months I learned how to code using | HTML | JAVASCRIPT
          | CSS | REACT | EXPRESS | MYSQL |
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
