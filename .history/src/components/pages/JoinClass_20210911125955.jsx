import React from "react";
import "./joinclass.scss";
import { Row, Col } from "react-bootstrap";
import JoinClassBtn from "../favbtn/JoinClassBtn";

function JoinClass() {
  return (
    <div className="container-fluid">
      <JoinClassBtn gradesubject="11 Science" zoomlink="https://zoom.us/" />
    </div>
  );
}

export default JoinClass;
