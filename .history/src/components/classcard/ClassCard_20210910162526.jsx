import React from "react";
import "./classcard.scss";

function ClassCard() {
  return (
    <div className="container">
      <div class="card">
        <h3 class="title">Card 1</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Card 2</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Card 3</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
      <div class="card">
        <h3 class="title">Card 4</h3>
        <div class="bar">
          <div class="emptybar"></div>
          <div class="filledbar"></div>
        </div>
        <div class="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle class="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
