import React from "react";
import "./class.scss";
import { Card, Col, Row, Button, Accordion } from "react-bootstrap";
import AccordionElement from "../accordion/AccordionElement";

function ClassElement() {
  return (
    <div className="container-fluid">
      <AccordionElement 
      url ={https://www.youtube.com/watch?v=q7LPqJor_D0&t=672s}
      aname = {2021 September Maths}
      eventKey =  {0}
      />
    </div>
  );
}

export default ClassElement;
