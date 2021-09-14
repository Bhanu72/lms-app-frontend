import React from "react";
import "./login.scss";
import { Col, Row, Form, Card, Button } from "react-bootstrap";
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
            <h3>Student Login</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
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
