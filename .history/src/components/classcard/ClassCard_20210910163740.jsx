import React from "react";
import "./classcard.scss";
import { Button } from "react-bootstrap";

function ClassCard() {
  return (
    <dsiv className="clzcd container">
      <div className="clzcard">
        <h3 className="title">Grade 10</h3>
        <div className="bar">
          <div className="cbtn">
            <Button variant="outline-danger">Maths</Button>
          </div>
        </div>
      </div>
    </dsiv>
  );
}

export default ClassCard;
