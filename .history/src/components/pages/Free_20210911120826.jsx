import React from "react";
import { Card, Col, Button, Row } from "react-bootstrap";
import FreeImg from "../../assets/images/free.png";

function Free() {
  return (
    <div className="container-fluid">
      <Row>
        <h1>You Are Free Today!!!</h1>
        <img src={FreeImg} alt="free" />
        <Row>
          <Button>Get Back To Home</Button>
        </Row>
      </Row>
    </div>
  );
}

export default Free;
