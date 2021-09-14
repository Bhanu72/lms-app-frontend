import React from "react";
import "./drag.scss";
import { Button } from "react-bootstrap";

function DragDrop() {
  return (
    <div>
      <form method="post" action="#" id="#" onSubmit="#">
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" onChange="#" className="form-control" multiple />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default DragDrop;
