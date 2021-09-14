import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import SignImg from "../../assets/images/signup.png";

function Signup() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <Card>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
        <Col>
          <img src={SignImg} alt="signup" className="signup" />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;