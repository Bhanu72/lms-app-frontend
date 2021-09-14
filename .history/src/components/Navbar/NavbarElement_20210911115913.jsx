import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import LogoImg from "../../assets/images/logo.jpg";
import "./nav.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import FooterElement from "../footer/FooterElement";
import Signup from "../pages/Signup";
import Change from "../pages/Change";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Favourite from "../pages/Favourite";
import ClassElement from "../pages/ClassElement";
import ClassSelect from "../pages/ClassSelect";
import Free from "../pages/Free";
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

            <NavDropdown
              title="List Of"
              id="collasible-nav-dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Classes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/aboutus">About us</Nav.Link>
            <Nav.Link href="/contactus">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              Signed in as:{" "}
              <a className="usrname" href="/changeprofile">
                Kavindu Iroshana
              </a>
            </Navbar.Text>
            <NavDropdown
              className="dropstart"
              id="nav-dropdown-dark-example"
              menuVariant="dark"
              data-bs-toggle="dropdown"
            >
              <NavDropdown.Item href="/changeprofile">Profile</NavDropdown.Item>

              <NavDropdown.Item href="/favourite">Favourite</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/signup">Sign in</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/signup" component={Signup} />
          <Route path="/changeprofile" component={Change} />
          <Route path="/login" component={Login} />
          <Route path="/contactus" component={Contact} />
          <Route path="/favourite" component={Favourite} />
          <Route path="/class" component={ClassElement} />
          <Route path="/classselect" component={ClassSelect} />
          <Route path="/free" component={Free} />
        </Switch>
        <FooterElement />
      </Router>
    </div>
  );
}

export default NavbarElement;
