import React from "react";
import "./classselect.scss";
import { Card, Row, Col, Container } from "react-bootstrap";
import ClassCard from "../classcard/ClassCard";
import OnlineImg from "../../assets/images/Spotlight.png";
import Online2Img from "../../assets/images/lunchb.png";

function ClassSelect() {
  return (
    <div className="ex container-fluid">
      <Container className="onlinecd">
        <div className="align-content-start flex-wrap ">
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
        </div>
      </Container>
    </div>
  );
}

export default ClassSelect;
