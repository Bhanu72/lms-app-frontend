import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpg";
import "./nav.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import FooterElement from "../footer/FooterElement";

function NavbarElement() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="List Of" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Classes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Kavindu</a>
            </Navbar.Text>
            <NavDropdown
              className="menu-right"
              id="nav-dropdown-dark-example"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={About} />
        </Switch>
        <FooterElement />
      </Router>
    </div>
  );
}

export default NavbarElement;
