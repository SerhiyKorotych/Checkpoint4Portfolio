import React from "react";
import "./style.css";
import * as ReactBootstrap from "react-bootstrap";

function CallNav() {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Container>
          <ReactBootstrap.Navbar.Brand href="#home">
            SK
          </ReactBootstrap.Navbar.Brand>
          <ReactBootstrap.Nav className="me-auto">
            <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#aboutme">
              About me
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#experiences">
              Experiences
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#projects">
              Projects
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#contacts">
              Contact me
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Container>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default CallNav;
