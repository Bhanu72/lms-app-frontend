import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import { Navbar } from "../navbar/index";

function RouterElements() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default RouterElements;
