import React from "react";
import "./joinbtn.scss";
import { Button } from "react-bootstrap";

function JoinClassBtn() {
  return (
    <div className="container">
      <Button className="jcbtn" href="https://zoom.us/" target="_blank">
        Grade 11 Maths
      </Button>
    </div>
  );
}

export default JoinClassBtn;
