import React from "react";
import "./drag.scss";
import { Button } from "react-bootstrap";

function DragDrop() {
  return <div className='container'>
   <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file"
                       onChange={onInputChange}
                       className="form-control"
                       multiple/>
            </div>

            <Button>Submit</Button>
        <form>
        
}

export default DragDrop;
