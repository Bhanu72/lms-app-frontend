import React from "react";
import "./acc.scss";
import { Card, Col, Row, Button, Accordion, Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import GGImg from "../../assets/images/logo.jpg";

function AccordionElement() {
  return (
    <div className="container-fluid">
      <Card className="collapse-card container">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              2021 September Maths{" "}
              <Form.Check aria-label="option 1" className="check" />
            </Accordion.Header>
            <Accordion.Body>
              <div className="player">
                <ReactPlayer
                  controls
                  url="https://www.youtube.com/watch?v=q7LPqJor_D0"
                />
              </div>
              <div className="resources">
                <Row>
                  <Col>
                    {" "}
                    <Card className="resource-card">
                      <a href="#" download className="dwn">
                        <Form.Check aria-label="option 1" className="check" />
                        Week 1
                      </a>
                      <hr />
                      <a href="#" download className="dwn">
                        <Form.Check aria-label="option 1" className="check" />
                        Week 2
                      </a>
                      <hr />
                      <a href="#" download className="dwn">
                        <Form.Check aria-label="option 1" className="check" />
                        Week 3
                      </a>
                      <hr />
                      <a href="#" download className="dwn">
                        <Form.Check aria-label="option 1" className="check" />
                        Week 4
                      </a>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="drag-card">
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Default file input example</Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </div>
  );
}

export default AccordionElement;
