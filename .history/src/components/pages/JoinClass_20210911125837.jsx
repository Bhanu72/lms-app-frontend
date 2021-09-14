import React from "react";
import "./joinclass.scss";
import { Row, Col } from "react-bootstrap";
import JoinClassBtn from "../favbtn/JoinClassBtn";

function JoinClass() {
  return (
    <div>
      <JoinClassBtn />
      <JoinClassBtn />
    </div>
  );
}

export default JoinClass;
