import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import SignImg from "../../assets/images/signup.png";

function Signup() {
  return (
    <div className="container">
      <Row>
        <Col></Col>
        <Col>
          <img src={SignImg} alt="signup" className="signup" />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
