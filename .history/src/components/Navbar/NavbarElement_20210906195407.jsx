import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
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
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            PassMe
          </Navbar.Brand>
        </Container>

        <Navbar.Toggle className="justify-content-end" />

        <Container>
          <Navbar.Text>
            Signed as: <a href="#login">Kavindu</a>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarElement;
