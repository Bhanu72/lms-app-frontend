import React from "react";
import "./change.scss";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import ChangeImg from "../../assets/images/change.png";
import { useEffect, useState } from "react";

function Change() {
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
          <Card className="change-card">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" required />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" required />
                </Col>
                <Row>
                  <Row>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control type="file" className="choose" />
                      <Form.Control
                        type="text"
                        placeholder="Enter School"
                        required
                      />
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
                        required
                      />

                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        required
                      />
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
                              required
                            />
                            <Form.Check
                              type="radio"
                              label="Grade 11"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios2"
                              required
                            />
                            <Form.Check
                              type="radio"
                              label="After O/L"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios3"
                              required
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
                              required
                            />
                            <Form.Check
                              type="radio"
                              label="English"
                              name="formHorizontalRadios2"
                              id="formHorizontal2"
                              required
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
          <img src={ChangeImg} alt="signup" className="change" />
        </Col>
      </Row>
    </div>
  );
}

export default Change;
