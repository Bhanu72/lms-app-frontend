import React from "react";
import "./classselect.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import ClassCard from "../classcard/ClassCard";
import OnlineImg from "../../assets/images/Spotlight.png";
import Online2Img from "../../assets/images/lunchb.png";

function ClassSelect() {
  return (
    <div className="container-fluid">
      <Card className="onlinecd">
        <Row>
          <Col>
            <img src={Online2Img} alt="onlineimg" className="onlineim" />
          </Col>
          <Col>
            <img src={OnlineImg} alt="onlineimg" className="onlineim" />
          </Col>
        </Row>

        <ClassCard />
        <ClassCard />
      </Card>
    </div>
  );
}

export default ClassSelect;
