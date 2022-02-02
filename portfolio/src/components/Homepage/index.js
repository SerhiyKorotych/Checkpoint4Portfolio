import React from "react";
import "./style.css";

function HomePage() {
  return (
    <div className="fullpage">
      <div className="HomePage">
        <div className="HomePage-text">
          <h5 className="homepage-hello">Hello there, My name is</h5>
          <h1 className="homepage-name">Serhiy Korotych</h1>
          <div>
            <h2 className="homepage-role">I'm a web developer!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
