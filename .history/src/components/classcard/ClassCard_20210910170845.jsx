import React from "react";
import "./classcard.scss";
import { Button } from "react-bootstrap";

function ClassCard(props) {
  const { subject, grade } = props;
  return (
    <div className="clzcd container">
      <div className="clzcard">
        <h3 className="title">Grade{grade}</h3>

        <div className="cbtn">
          <Button variant="outline-danger" className="dangerbtn">
            {subject}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
