import React from "react";
import "./home.scss";
import { Carousel } from "react-bootstrap";
import C1 from "../../assets/images/c1.jpg";
import C2 from "../../assets/images/c2.jpg";
import C3 from "../../assets/images/c3.jpg";

function Home() {
  return (
    <div className="container-fluid">
      <Carousel variant="dark">
        <Carousel.Item>
          <img className=" d-block w-100 mx-auto" src={C1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 mx-auto" src={C2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 mx-auto" src={C3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
