import React from "react";
import "./style.css";
import * as ReactBootstrap from "react-bootstrap";

function Experiences() {
  return (
    <div className="experiences-page">
      <div className="job1">
        <h1>My work experiences</h1>
        <ReactBootstrap.Card style={{ width: "18rem" }}>
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </ReactBootstrap.Card.Subtitle>
            <ReactBootstrap.Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Link href="#">
              Card Link
            </ReactBootstrap.Card.Link>
            <ReactBootstrap.Card.Link href="#">
              Another Link
            </ReactBootstrap.Card.Link>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      </div>
      <div className="job2">
        <ReactBootstrap.Card style={{ width: "18rem" }}>
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </ReactBootstrap.Card.Subtitle>
            <ReactBootstrap.Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Link href="#">
              Card Link
            </ReactBootstrap.Card.Link>
            <ReactBootstrap.Card.Link href="#">
              Another Link
            </ReactBootstrap.Card.Link>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      </div>
      <div className="job3">
        <ReactBootstrap.Card style={{ width: "18rem" }}>
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>Card Title</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </ReactBootstrap.Card.Subtitle>
            <ReactBootstrap.Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </ReactBootstrap.Card.Text>
            <ReactBootstrap.Card.Link href="#">
              Card Link
            </ReactBootstrap.Card.Link>
            <ReactBootstrap.Card.Link href="#">
              Another Link
            </ReactBootstrap.Card.Link>
          </ReactBootstrap.Card.Body>
        </ReactBootstrap.Card>
      </div>
    </div>
  );
}

export default Experiences;
