import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaishnav V M </span>
            from <span className="purple"> KANNUR, KERALA, INDIA.</span>
            <br />
            I have completed internship in MERN STACK Web Development
            <br />
            I have 6 months of freelance experience.
           
            <br />
            I completed my Bachelor's in 2022.


            <br />
            <br />
            During my internship Period i done two projects .
            <br />
            <br />
          <ul>
            <li className="about-activity">
              <ImPointRight />Weight Management Web application
            </li>
            <li className="about-activity">
              <ImPointRight /> Car-Rental Web application
            </li>
            <li className="about-activity">
              <ImPointRight /> E-commerce Web application
            </li>
            <li className="about-activity">
              <ImPointRight />  some other mini projects
            </li>
          </ul>
            <br />
           
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games.
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Vaishnav V M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
