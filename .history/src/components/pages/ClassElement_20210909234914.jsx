import React from "react";
import "./class.scss";
import { Card, Col, Row, Button, Accordion } from "react-bootstrap";
import AccordionElement from "../accordion/AccordionElement";

function ClassElement() {
  return (
    <div className="container-fluid">
      <h1>Class Materials</h1>
      <Card className="class-card">
        <AccordionElement
          url="https://www.youtube.com/watch?v=q7LPqJor_D0&t=672s"
          aname="2021 September Maths"
          eventKey="0"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2021 Octomber Maths"
          eventKey="1"
        />
      </Card>
    </div>
  );
}

export default ClassElement;
