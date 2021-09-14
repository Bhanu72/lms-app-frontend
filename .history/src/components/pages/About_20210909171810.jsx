import React from "react";
import "./about.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import AboutImg from "../../assets/images/about.jpeg";

function About() {
  return (
    <div className="container-fluid">
      <div className="team-boxed">
        <div className="box">
          <h1 className="nm name">About PassMe Learn</h1>
          <img className="rounded-circle" src={AboutImg} />

          <p className="title">Kavindu iroshana</p>
          <p className="description">
            Welcome to "PassMe Learn" Sri Lanka’s latest educational network is
            called “PassMe.lk”. We are giving a chance to get ready for the O/l
            examination with the help of guessing questions and educational and
            motivational video lessons so on. What’s remarkable is that we have
            an o/l Mathematics Youtube channel with nearly 80,000 subscribers.
            We also have an O/L Science Youtube channel with over 10,000
            subscribers. Since our inception in 2019, we have built a solid
            reputation for delivering high quality and affordable academic
            programmes. “PassMe” App could be introduced as a revolutionary App
            that could emerge a revolution in the educational field and which
            helps to create experts. It could be recommended for competitive
            exams. And also it can help one to obtain university entrance
            easily. If you want to become a successful person, You can stay with
            the “PassMe.lk”.
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
  );
}

export default About;
