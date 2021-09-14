import React from "react";
import "./joinbtn.scss";
import { Button } from "react-bootstrap";

function JoinClassBtn(props) {
  const { zoomlink, gradesubject } = props;
  return (
    <div className="container">
      <h3>Click Here To Join Online Class Now...</h3>
      <Button className="jcbtn" href={zoomlink} target="_blank">
        Grade {gradesubject}
      </Button>
    </div>
  );
}

export default JoinClassBtn;
