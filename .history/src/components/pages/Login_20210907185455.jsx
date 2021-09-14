import React from "react";
import "./login.scss";
import { Col, Row, Form, Card } from "react-bootstrap";
import Working from "../../assets/images/working.svg";

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
          <h1>image</h1>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
