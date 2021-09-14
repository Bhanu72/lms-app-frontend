import React from "react";
import "./contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5"></div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-md-7 d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  <h1 className="cus">Contact Us</h1>
                  <div id="form-message-warning" class="mb-4"></div>

                  <form method="POST" id="contactForm" name="contactForm">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="gg form-control"
                            name="name"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className=" form-group">
                          <input
                            type="email"
                            className="gg form-control"
                            name="email"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="gg form-control"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            className="gg form-control"
                            id="message"
                            cols="30"
                            rows="7"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="contact-btn btn btn-primary"
                          />
                          <div className="submitting"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-stretch">
                <div className="info-wrap bg-primary w-100 p-lg-5 p-4">
                  <h3 className="mb-4 mt-md-4">Contact us</h3>

                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span className="txt">
                          {" "}
                          <FontAwesomeIcon icon={faPhone} className="fico" />
                          Phone :
                        </span>{" "}
                        <br />
                        <a
                          className="contact"
                          href="tel:+94713477770"
                          target="_blank"
                        >
                          +94 71 3477 770
                        </a>
                      </p>
                    </div>
                  </div>
                  <dv className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span className="txt">
                          <FontAwesomeIcon icon={faEnvelope} className="fico" />
                          Email :
                        </span>{" "}
                        <br />
                        <a
                          className="contact"
                          href="mailto:info@passme.lk"
                          target="_blank"
                        >
                          info@passme.lk
                        </a>
                      </p>
                    </div>
                  </dv>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text pl-3">
                      <p>
                        <span className="txt">
                          <FontAwesomeIcon icon={faWhatsapp} className="fico" />
                          Whatsapp :
                        </span>{" "}
                        <br />
                        <a
                          className="contact"
                          href="https://wa.me/+94713477770"
                          target="_blank"
                        >
                          Contact Us On Whatsapp
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="dbox w-100 d-flex align-items-center">
                    <div className="icon d-flex align-items-center justify-content-center"></div>
                    <div className="text pl-3">
                      <p>
                        <span className="txt">
                          {" "}
                          <FontAwesomeIcon icon={faGlobe} className="fico" />
                          Website :
                        </span>{" "}
                        <br />
                        <a
                          href="https://passme.lk/"
                          className="contact"
                          target="_blank"
                        >
                          Passme.lk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
