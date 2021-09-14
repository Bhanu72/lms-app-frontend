import React from "react";
import { Navbar, Container } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpg";
import "./nav.scss";

function NavbarElement() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={LogoImg}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{" "}
            <span>PassMe</span>
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Container>
            <Navbar.Text>
              Signed in as: <a href="#login">Kavindu</a>
            </Navbar.Text>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarElement;
