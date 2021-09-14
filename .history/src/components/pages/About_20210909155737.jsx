import React from "react";
import "./about.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutImg from "../../assets/images/about.jpeg";

function About() {
  return (
    <div className="container-fluid">
      <div className="header container">
        <h1 className="us">About Us</h1>
      </div>
      <Row>
        <Col>
          <img src={AboutImg} alt="about " className="about" />
        </Col>
        <Col>
          <Card>
            <p className="content-about"></p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
