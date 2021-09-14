import React from "react";
import "./home.scss";
import { Row, Col, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import C1 from "../../assets/images/c1.jpg";
import C2 from "../../assets/images/c2.jpg";
import C3 from "../../assets/images/c3.jpg";
import C4 from "../../assets/images/c4.jpg";

function Home() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img className=" d-block w-100" src={C1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 " src={C2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 " src={C3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className=" d-block w-100 " src={C4} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
      <hr size="3" />
      <div className="homebtn">
        <Row>
          <Col>
            <Button className="classbtn">Online Class</Button>
          </Col>
          <Col>
            <br />
            <br />
            <Button className="livebtn">Live</Button>
          </Col>
          <Col>
            <Button className="coursebtn">Online Course</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
