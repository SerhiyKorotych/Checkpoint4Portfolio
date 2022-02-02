import React from "react";
import "./app.css";
import {
  BackgroundV,
  HomePage,
  CallNav,
  AboutMe,
  Project,
  ContactMe,
} from "./components";

function App() {
  return (
    <>
      <BackgroundV />
      <CallNav />
      <>
        <HomePage />
      </>
      <>
        <AboutMe />
      </>
      <>
        <Project />
      </>
      <>
        <ContactMe />
      </>
    </>
  );
}

export default App;
