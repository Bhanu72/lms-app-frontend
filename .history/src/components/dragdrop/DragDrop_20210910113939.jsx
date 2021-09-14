import React from "react";
import "./drag.scss";
import { Button , Form } from "react-bootstrap";

function DragDrop() {
  return <div className='container'>
   <Form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

            <Button>Submit</Button>
        </Form>
}

export default DragDrop;
