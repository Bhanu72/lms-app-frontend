import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button } from "react-bootstrap";
import SignImg from "../../assets/images/signup";

function Signup() {
  return (
    <div>
      <Row>
        <Col></Col>
        <Col>
          <img src={SignImg} alt="signup" />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
