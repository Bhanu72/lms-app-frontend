import React from "react";
import "./classselect.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import ClassCard from "../classcard/ClassCard";
import OnlineImg from "../../assets/images/Spotlight.png";
import Online2Img from "../../assets/images/lunchb.png";
import { useHistory, Link } from "react-router-dom";

function ClassSelect() {
  let history = useHistory();
  return (
    <div className="container-fluid">
      <h1>Selected Module</h1>
      <Card className="onlinecd">
        <Row>
          <Col>
            <ClassCard grade="10" subject="Maths" location="/class" />
            <ClassCard grade="10" subject="Maths" />
            <ClassCard grade="10" subject="Maths" />
          </Col>
          <Col>
            <ClassCard grade="10" subject="Science" />
            <ClassCard grade="10" subject="Science" />
            <ClassCard grade="10" subject="Science" />
          </Col>
          <Col>
            <ClassCard grade="10" subject="Maths" />
            <ClassCard grade="10" subject="Maths" />
            <ClassCard grade="10" subject="Maths" />
          </Col>
          <Col>
            <ClassCard grade="10" subject="Maths" />
            <ClassCard grade="10" subject="Maths" />
            <ClassCard grade="10" subject="Maths" />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default ClassSelect;
