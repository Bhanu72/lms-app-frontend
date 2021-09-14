import React from "react";
import { Button, Row } from "react-bootstrap";
import FreeImg from "../../assets/images/free.png";
import "./free.scss";

function Free() {
  return (
    <div className="container-fluid">
      <Row className="yft">
        <h1>You Are Free Today!!!</h1>
        <img src={FreeImg} alt="free" className="freeimg" />
        <Button className="freebtn">Get Back To Home</Button>
      </Row>
    </div>
  );
}

export default Free;
