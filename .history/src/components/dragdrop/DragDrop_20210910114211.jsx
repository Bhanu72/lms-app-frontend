import React from "react";
import { Button } from "react-bootstrap";
import "./drag.scss";

function DragDrop() {
  return (
    <div>
      <form method="post" action="#" id="#" onSubmit="#">
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" onChange="#" className="form-control" multiple />
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default DragDrop;
