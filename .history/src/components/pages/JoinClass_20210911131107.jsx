import React from "react";
import "./joinclass.scss";
import { Row, Col } from "react-bootstrap";
import JoinClassBtn from "../favbtn/JoinClassBtn";
import JoinClassImg from "../../assets/images/joinclass.png";

function JoinClass() {
  return (
    <div className="container-fluid">
      <h1>Join Online Class Now...</h1>
      <Row>
        <Col>
          <JoinClassBtn gradesubject="11 Science" zoomlink="https://zoom.us/" />
        </Col>
        <Col>
          <img src={JoinClassImg} alt="joinclass" className="joinimg" />
        </Col>
      </Row>
    </div>
  );
}

export default JoinClass;
