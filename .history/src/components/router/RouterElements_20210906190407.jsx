import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function RouterElements() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default RouterElements;
