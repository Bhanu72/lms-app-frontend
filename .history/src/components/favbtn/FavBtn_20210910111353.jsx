import React from "react";
import "./fav.scss";

function FavBtn() {
  return (
    <div className="container">
      <div className="fav">
        <input
          type="checkbox"
          //   name="checkbox"
          //   id="checkbox"
          className="heart"
        />
        <span></span>
      </div>
    </div>
  );
}

export default FavBtn;
