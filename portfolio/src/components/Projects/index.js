import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import KinderBday from "../../assets/kinderBday.png";
import BBtrivia from "../../assets/BBtrivia.jpg";
import RadioTrip from "../../assets/RadioTrip.png";

function Project() {
  return (
    <div className="projects-page">
      <ReactBootstrap.CardGroup>
        <ReactBootstrap.Card>
          <ReactBootstrap.Card.Img variant="top" src={KinderBday} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>KinderBday</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text>
              I worked as a front-end developer for KinderBday, A Mobile first
              App, that allows users to create parties, add gifts and invite
              guests.
            </ReactBootstrap.Card.Text>
          </ReactBootstrap.Card.Body>
          <ReactBootstrap.Card.Footer>
            <small className="text-muted">
              <a
                href="https://github.com/spacepilots/kinderbday"
                target="_blank"
              >
                https://github.com/spacepilots/kinderbday
              </a>
            </small>
          </ReactBootstrap.Card.Footer>
        </ReactBootstrap.Card>
        <ReactBootstrap.Card>
          <ReactBootstrap.Card.Img variant="top" src={BBtrivia} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>
              Breaking Bad trivia
            </ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text>
              As the second Project for the Wild Code School, Our Group
              developed a Breaking Bad Trivia quiz game. I worked mostly on the
              Front-end and Styling of the Game.
            </ReactBootstrap.Card.Text>
          </ReactBootstrap.Card.Body>
          <ReactBootstrap.Card.Footer>
            <small className="text-muted">
              <a
                href="https://github.com/SerhiyKorotych/bb-trivia"
                target="_blank"
              >
                https://github.com/SerhiyKorotych/bb-trivia
              </a>
            </small>
          </ReactBootstrap.Card.Footer>
        </ReactBootstrap.Card>
        <ReactBootstrap.Card>
          <ReactBootstrap.Card.Img variant="top" src={RadioTrip} />
          <ReactBootstrap.Card.Body>
            <ReactBootstrap.Card.Title>Radio Trip</ReactBootstrap.Card.Title>
            <ReactBootstrap.Card.Text>
              As part of the Renagades, our Hackaton group, We developed a
              website that fetched Radio stations around the world, and play
              them on the App. On this App i focused mostly on working in the
              Front-end and Styling
            </ReactBootstrap.Card.Text>
          </ReactBootstrap.Card.Body>
          <ReactBootstrap.Card.Footer>
            <small className="text-muted">
              {" "}
              <a
                href="https://github.com/hugosylva/hackathon-renegades"
                target="_blank"
              >
                https://github.com/hugosylva/hackathon-renegades
              </a>
            </small>
          </ReactBootstrap.Card.Footer>
        </ReactBootstrap.Card>
      </ReactBootstrap.CardGroup>
    </div>
  );
}

export default Project;
