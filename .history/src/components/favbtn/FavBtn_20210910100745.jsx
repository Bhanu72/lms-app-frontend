import React from "react";
import "./fav.scss";

function FavBtn() {
  return (
    <div className="container">
      <div className="box">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <span></span>
      </div>
    </div>
  );
}

export default FavBtn;
