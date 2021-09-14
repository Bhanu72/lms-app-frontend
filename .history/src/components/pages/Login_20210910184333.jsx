import React from "react";
import "./login.scss";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
import Working from "../../assets/images/working.svg";
import Multitasking from "../../assets/images/multitasking.svg";
import { useHistory, Link } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <img src={Working} alt="workingstd" className="loginimg" />
        </Col>
        <Col>
          <Card className="login-card">
            <h3 className="loginstd">Student Login</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="loginbox"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="loginbox"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <a href="#" className="forgot">
                  Forgot Password?
                </a>
                <br />

                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <Button variant="primary" type="submit" className="login-btn">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
        <Col>
          <img src={Multitasking} alt="multistd" className="loginimg" />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
