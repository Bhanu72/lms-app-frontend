import React from "react";
import { Navbar } from "react-bootstrap";

function NavbarElement() {
  return (
    <div className="container-fluid">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
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
