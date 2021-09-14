import React from "react";
import "./about.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutImg from "../../assets/images/about.jpeg";

function About() {
  return (
    <div className="bg container-fluid">
      <div className="team-boxed">
        <div className="container">
          <div className=" people">
            <div className="col-md-6 col-lg-4 item">
              <div className="box">
                <img className="rounded-circle" src="#" />
                <h3 className="name">Emily Clark</h3>
                <p className="title">Artist</p>
                <p className="description">
                  Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                  lacus. Praesent aliquam in tellus eu gravida. Aliquam varius
                  finibus est, et interdum justo suscipit id. Etiam dictum
                  feugiat tellus, a semper massa.{" "}
                </p>
                <div class="social">
                  <a href="#">
                    <i class="fa fa-facebook-official"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
