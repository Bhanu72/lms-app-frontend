import React from "react";
import "./home.scss";
import { Carousel } from "react-bootstrap";
import C1 from "../../assets/images/c1";
import C2 from "../../assets/images/c2";
import C3 from "../../assets/images/c3";

function Home() {
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={C1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={C3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
