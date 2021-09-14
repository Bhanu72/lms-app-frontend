import React from "react";
import "./about.scss";
import { Container } from "react-bootstrap";
import AboutImg from "../../assets/images/about.jpeg";

function About() {
  return (
    <div className="container-fluid">
      <img src={AboutImg} alt="about" className="about" />
    </div>
  );
}

export default About;
