import React from "react";
import "./about.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutImg from "../../assets/images/about.jpeg";

function About() {
  return (
    <div className="bg container-fluid">
      <div class="team-boxed">
        <div class="container">
          <div class=" people">
            <div class="col-md-6 col-lg-4 item">
              <div class="box">
                <img class="rounded-circle" src="#" />
                <h3 class="name">Emily Clark</h3>
                <p class="title">Artist</p>
                <p class="description">
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
