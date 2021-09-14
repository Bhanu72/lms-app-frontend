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
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarElement;
