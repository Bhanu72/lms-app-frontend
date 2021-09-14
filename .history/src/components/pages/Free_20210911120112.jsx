import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import FreeImg from "../../assets/images/free.png";

function Free() {
  return (
    <div className="container-fluid">
      <Row>
        <img src={FreeImg} alt="free" />
        <Row></Row>
      </Row>
    </div>
  );
}

export default Free;
