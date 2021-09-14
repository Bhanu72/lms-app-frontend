import React from "react";
import "./login.scss";
import { Col, Row, Form, Card } from "react-bootstrap";
import Working from "../../assets/images/working.svg";
import Multitasking from "../../assets/images/multitasking.svg";

function Login() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <img src={Working} alt="workingstd" />
        </Col>
        <Col>
          <Card className="login-card">
            <h2>Student Login</h2>
          </Card>
        </Col>
        <Col>
          <img src={Multitasking} alt="multistd" />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
