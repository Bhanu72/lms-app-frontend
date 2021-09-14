import React from "react";
import "./about.scss";
import { Container } from "react-bootstrap";
import AboutImg from "../../asssets/images/about.jpeg";

function About() {
  return (
    <div className="container-fluid">
      <Container>
        <img src={AboutImg} alt="about" />
      </Container>
    </div>
  );
}

export default About;
