import React from "react";
import "./classcard.scss";

function ClassCard() {
  return (
    <dsiv className="clzcd container">
      <div className="clzcard">
        <h3 className="title">Grade 10 Maths</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
      </div>
    </dsiv>
  );
}

export default ClassCard;
