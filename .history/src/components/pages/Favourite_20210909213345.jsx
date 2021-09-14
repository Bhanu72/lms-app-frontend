import React from "react";
import { Card } from "react-bootstrap";
import "./fav.scss";

function Favourite() {
  return (
    <div className="container-fluid">
      <h1>Favourite</h1>
      <Card className="fav-card"></Card>
    </div>
  );
}

export default Favourite;
