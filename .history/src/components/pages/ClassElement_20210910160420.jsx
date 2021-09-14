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
          week1="https://drive.google.com/file/d/1nbGD97wxjjFvkBWKo0j5H2fL-MmtHqc4/view?usp=sharing"
          week2="https://drive.google.com/file/d/1nbGD97wxjjFvkBWKo0j5H2fL-MmtHqc4/view?usp=sharing"
          week3="#"
          week4="#"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2021 November Maths"
          eventKey="1"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2021 December Maths"
          eventKey="2"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2022 January Maths"
          eventKey="3"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2022 February Maths"
          eventKey="4"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2022 March Maths"
          eventKey="5"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2022 April Maths"
          eventKey="6"
        />
        <AccordionElement
          url="https://www.youtube.com/watch?v=JTyi0HjuuGc"
          aname="2022 May Maths"
          eventKey="7"
        />
      </Card>
    </div>
  );
}

export default ClassElement;
