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
                  <Form.Control readOnly defaultValue="Kavindu" />
                </Col>
                <Col>
                  <Form.Control readOnly defaultValue="Iroshana" />
                </Col>
                <Row>
                  <Row>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Control type="file" className="choose" />
                      <Form.Control
                        readOnly
                        defaultValue="Isipathana College"
                      />
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
                        defaultValue="+94712345678"
                        required
                      />

                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        defaultValue="kavindu@passme.lk"
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
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                          required
                        />
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
