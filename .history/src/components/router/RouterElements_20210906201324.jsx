import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NavbarElement from "../Navbar/NavbarElement";

function RouterElements() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/aboutus" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterElements;
