import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpg";
import "./nav.scss";

function NavbarElement() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
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

        <Navbar.Text className="justify-content-end">
          Signed as: <a href="#login">Kavindu</a>
        </Navbar.Text>
      </Navbar>
    </div>
  );
}

export default NavbarElement;
