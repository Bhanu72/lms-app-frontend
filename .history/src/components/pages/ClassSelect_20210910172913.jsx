import React from "react";
import "./classselect.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import ClassCard from "../classcard/ClassCard";
import OnlineImg from "../../assets/images/Spotlight.png";

function ClassSelect() {
  return (
    <div className="container-fluid">
      <Container>
        <Row>
          <Col>{""}</Col>
          <Col></Col>
        </Row>
      </Container>
      <Card>
        <img src={OnlineImg} alt="onlineimg" className="onlineim" />
        <ClassCard />
        <ClassCard />
      </Card>
    </div>
  );
}

export default ClassSelect;
