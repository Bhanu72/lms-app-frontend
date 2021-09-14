import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import SignImg from "../../assets/images/signup.png";

function Signup() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <Card className="signup-card">
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
                <Row>
                  <Row>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control type="file" className="choose" />
                      <Form.Control type="text" placeholder="Enter School" />
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
                      />

                      <Form.Control type="email" placeholder="Enter Email" />
                    </Form.Group>
                  </Row>
                  <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                </Row>
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
