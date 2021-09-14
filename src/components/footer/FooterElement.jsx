import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import {
  faYoutube,
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { Row, Col } from "react-bootstrap";

function FooterElement() {
  return (
    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div>
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by {""}
              <a href="/">Passme Learn</a>.
            </p>
          </div>

          <div>
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/PassMe.lk/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  className="instagram"
                  href="https://www.instagram.com/kavinda_iroshan/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  className="dribbble"
                  href="https://www.youtube.com/passme"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  className="tiktok"
                  href="https://www.tiktok.com/@passme.lk?lang=en"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a className="web" href="https://www.passme.lk" target="_blank">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterElement;