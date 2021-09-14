import React from "react";
import "./drag.scss";
import { Button } from "react-bootstrap";

function DragDrop() {
  return (
    <div>
      <form method="post" action="#" id="#" onSubmit="#">
        <div className="form-group files">
          <input
            type="file"
            onChange="#"
            className="form-control"
            multiple
            className="dragdrop"
          />
        </div>

        <Button variant="danger" className="btnup">
          Upload
        </Button>
      </form>
    </div>
  );
}

export default DragDrop;
