import React from "react";
import "./acc.scss";
import { Card, Col, Row, Button, Accordion, Form } from "react-bootstrap";
import ReactPlayer from "react-player";
import GGImg from "../../assets/images/logo.jpg";
import FavBtn from "../favbtn/FavBtn";
import DragDrop from "./dragdrop/DragDrop";

function AccordionElement(props) {
  const { aname, url, eventKey, week1, week2, week3, week4 } = props;
  return (
    <div className="ac container">
      <Card className="collapse-card container">
        <Accordion>
          <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
              {aname}
              <Form.Check aria-label="option 0" className="check" />
            </Accordion.Header>
            <Accordion.Body>
              <Card className="cdf">
                <FavBtn />
              </Card>
              <div className="player">
                <ReactPlayer controls url={url} />
              </div>
              <div className="resources">
                <Row>
                  <Col>
                    {" "}
                    <Card className="resource-card">
                      <a href={week1} download className="dwn">
                        <Form.Check aria-label="option 1" className="check" />
                        Week 1
                      </a>
                      <hr />
                      <a href={week2} download className="dwn">
                        <Form.Check aria-label="option 2" className="check" />
                        Week 2
                      </a>
                      <hr />
                      <a href={week3} download className="dwn">
                        <Form.Check aria-label="option 3" className="check" />
                        Week 3
                      </a>
                      <hr />
                      <a href={week4} download className="dwn">
                        <Form.Check aria-label="option 4" className="check" />
                        Week 4
                      </a>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="drag-card">
                      <DragDrop />
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
