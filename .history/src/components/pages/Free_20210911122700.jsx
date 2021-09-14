import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import FreeImg from "../../assets/images/free.png";
import "./free.scss";

function Free() {
  return (
    <div className="container-fluid">
      <Row>
        <h1 className="yft">You Are Free Today!!!</h1>
        <Col>
          <img src={FreeImg} alt="free" className="freeimg" />
        </Col>
        <Col>
          <Button className="freebtn">Get Back To Home</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Free;
