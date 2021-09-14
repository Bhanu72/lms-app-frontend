import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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
                <a
                  class="facebook"
                  href="https://www.facebook.com/PassMe.lk/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  class="instagram"
                  href="https://www.instagram.com/kavinda_iroshan/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  class="tiktok"
                  href="https://www.tiktok.com/@passme.lk?lang=en"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </li>
              <li>
                <a
                  class="dribbble"
                  href="https://www.youtube.com/passme"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterElement;
