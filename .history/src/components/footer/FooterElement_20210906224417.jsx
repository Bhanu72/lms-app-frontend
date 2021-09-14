import React from "react";
import "./footer.scss";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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

          <div class="col-md-4 col-sm-6 ">
            <ul class="social-icons">
              <li>
                <a class="facebook" href="#">
                  <i class={faUser}></i>
                </a>
              </li>
              <li>
                <a class="twitter" href="#">
                  <i class={faUser}></i>
                </a>
              </li>
              <li>
                <a class="dribbble" href="#">
                  <i class={faUser}></i>
                </a>
              </li>
              <li>
                <a class="linkedin" href="#">
                  <i class={faUser}></i>
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
