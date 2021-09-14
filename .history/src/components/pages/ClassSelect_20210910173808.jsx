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
          <div className="dfex">
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
            <ClassCard />
          </div>
        </Row>
      </Card>
    </div>
  );
}

export default ClassSelect;
