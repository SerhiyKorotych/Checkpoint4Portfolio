import React from "react";
import "./app.css";
import BackgroundVideo from "./assets/greencode.mp4";

function App() {
  return (
    <div className="fullpage">
      <video className="background" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4"></source>
      </video>
      <div className="Navbar_Homepage"></div>
      <div className="HomePage">
        <div>
          <h5 className="homepage-hello">Hello there, My name is</h5>
          <h1 className="homepage-name">Serhiy Korotych</h1>
          <div>
            <h2 className="homepage-role">And I'm a Web Developer!</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
