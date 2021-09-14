import React from "react";
import { Navbar, Container } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpg";

function NavbarElement() {
  return (
    <div className="container-fluid">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={LogoImg}
              width="45"
              height="45"
              className="d-inline-block align-top"
            />{" "}
            <span className='brandname'>React Bootstrap<span>
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarElement;
