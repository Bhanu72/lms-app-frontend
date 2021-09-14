import React from "react";
import "./classselect.scss";
import { Card, Row, Col } from "react-bootstrap";
import ClassCard from "../classcard/ClassCard";

function ClassSelect() {
  return (
    <div className="container-fluid">
      <Card>
        <ClassCard />
      </Card>
    </div>
  );
}

export default ClassSelect;
