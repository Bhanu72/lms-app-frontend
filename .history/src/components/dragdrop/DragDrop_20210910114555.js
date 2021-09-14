import React from "react";
import { Button } from "react-bootstrap";
import "./drag.scss";
import {useState} from 'react';
import axios from 'axios';
import { toast} from 'react-toastify';

function DragDrop() {
    export const FileUploader = ({onSuccess}) => {
    const [files, setFiles] = useState([]);

    const onInputChange = (e) => {
        setFiles(e.target.files)
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
                toast.success('Upload Success');
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
    };
  return (
    <div>
      <form method="post" action="#" id="#" onSubmit={onSubmit}>
        <div className="form-group files">
          <label>Upload Your File </label>
          <input type="file" onChange={onInputChange} className="form-control" multiple />
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default DragDrop;
