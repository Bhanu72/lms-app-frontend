import React from "react";
import "./signup.scss";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import SignImg from "../../assets/images/signup.png";
import { useEffect, useState } from "react";

function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
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
                      <Row>
                        <Col>
                          <td>
                            <Form.Label as="legend" column sm={2}>
                              Select Your Grade
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              label="Grade 10"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                            <Form.Check
                              type="radio"
                              label="Grade 11"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                            />
                            <Form.Check
                              type="radio"
                              label="After O/L"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios3"
                            />
                          </td>
                        </Col>
                        <Col>
                          <td>
                            <Form.Label as="legend" column sm={2}>
                              Preferred Language
                            </Form.Label>
                            <Form.Check
                              type="radio"
                              label="Sinhala"
                              name="formHorizontalRadios2"
                              id="formHorizontal1"
                            />
                            <Form.Check
                              type="radio"
                              label="English"
                              name="formHorizontalRadios2"
                              id="formHorizontal2"
                            />
                          </td>
                        </Col>
                      </Row>
                    </Form.Group>
                  </Row>
                  <Col>
                    <Button type="submit" className="submitbtn">
                      Submit
                    </Button>
                  </Col>
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
