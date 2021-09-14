import React from "react";
import "./classselect.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import ClassCard from "../classcard/ClassCard";
import OnlineImg from "../../assets/images/Spotlight.png";
import Online2Img from "../../assets/images/lunchb.png";

function ClassSelect() {
  return (
    <div className="ex container-fluid">
      <Card className="onlinecd">
        <Row>
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
