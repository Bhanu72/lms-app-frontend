import React from "react";
import "./login.scss";
import { Col, Row, Form, Card } from "react-bootstrap";
import Working from "../../assets/images/working.svg";
import Multitasking from "../../assets/images/multitaslking.svg";

function Login() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <img src={Working} alt="workingstd" />
        </Col>
        <Col>
          <h1>Content</h1>
        </Col>
        <Col>
          <img src={Multitasking} alt="multistd" />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
