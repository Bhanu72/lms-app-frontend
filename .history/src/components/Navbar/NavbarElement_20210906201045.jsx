import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpg";
import "./nav.scss";

function NavbarElement() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="List Of" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Classes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Kavindu</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarElement;
