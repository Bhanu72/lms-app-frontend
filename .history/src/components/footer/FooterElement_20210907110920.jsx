import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa Youtube } from "@fortawesome/free-brands-svg-icons";
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
                  <FontAwesomeIcon icon={faUser} />
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <FontAwesomeIcon icon={faUser} />
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
