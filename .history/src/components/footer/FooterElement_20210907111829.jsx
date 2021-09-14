import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

import { Row, Col } from "react-bootstrap";

function FooterElement() {
  return (
    <div className="site-footer">
      <div class="container">
        <div class="row">
          <div>
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by {""}
              <a href="/">Passme Learn</a>.
            </p>
          </div>

          <div>
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a class="tiktok" href="#">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterElement;
