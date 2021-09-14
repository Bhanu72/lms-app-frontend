import React from "react";
import "./drag.scss";

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

            <button>Submit</button>
        </form>
}

export default DragDrop;
