import React from "react";
import "./home.scss";
import { Row, Col, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import C1 from "../../assets/images/c1.jpg";
import C2 from "../../assets/images/c2.jpg";
import C3 from "../../assets/images/c3.jpg";

function Home() {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr size="3" />
      <div className="homebtn">
        <Row>
          <Col>
            <Button>Online Class</Button>
          </Col>
          <Col>
            <Button>Online Course</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;
