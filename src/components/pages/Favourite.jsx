import React from "react";
import { Card } from "react-bootstrap";
import "./fav.scss";

function Favourite() {
  return (
    <div className="container-fluid">
      <h1>Favourite</h1>
      <Card className="fav-card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae
          itaque voluptates facilis, in hic cupiditate minus ipsa blanditiis non
          doloribus odio odit doloremque obcaecati pariatur animi, dolorem
          aperiam quibusdam?
        </p>
      </Card>
    </div>
  );
}

export default Favourite;
