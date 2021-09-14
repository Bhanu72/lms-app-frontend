import React from "react";
import "./acc.scss";
import { Card, Col, Row, Button, Accordion, Form } from "react-bootstrap";
import ReactPlayer from "react-player";

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
                    <div class="item-wrapper one">
                      <div class="item">
                        <form
                          data-validation="true"
                          action="#"
                          method="post"
                          //   enctype="multipart/form-data"
                        >
                          <div class="item-inner">
                            <div class="item-content">
                              <div class="image-upload">
                                <label
                                  style="cursor: pointer;"
                                  for="file_upload"
                                >
                                  <img src="" alt="" class="uploaded-image" />
                                  <div class="h-100">
                                    <div class="dplay-tbl">
                                      <div class="dplay-tbl-cell">
                                        <i class="fa fa-cloud-upload"></i>
                                        <h5>
                                          <b>Choose Your Image to Upload</b>
                                        </h5>
                                        <h6 class="mt-10 mb-70">
                                          Or Drop Your Image Here
                                        </h6>
                                      </div>
                                    </div>
                                  </div>
                                  <input
                                    data-required="image"
                                    type="file"
                                    name="image_name"
                                    id="file_upload"
                                    class="image-input"
                                    data-traget-resolution="image_resolution"
                                    value="#"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </div>
  );
}

export default AccordionElement;
