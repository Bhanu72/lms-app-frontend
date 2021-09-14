import React from "react";
import "./classcard.scss";

function ClassCard() {
  return (
    <dsiv className="clzcd container">
      <div className="card">
        <h3 className="title">Card 4</h3>
        <div className="bar">
          <div className="emptybar"></div>
          <div className="filledbar"></div>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
    </dsiv>
  );
}

export default ClassCard;
