import React from "react";
import "./classcard.scss";
import { Button } from "react-bootstrap";

function ClassCard() {
  return (
    <div className="clzcd container">
      <div className="clzcard">
        <h3 className="title">Grade 10</h3>
        <dv className="bar">
          <div className="cbtn">
            <Button variant="outline-danger">Maths</Button>
          </div>
        </dv>
      </div>
    </div>
  );
}

export default ClassCard;
