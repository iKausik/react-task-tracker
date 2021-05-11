import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="container">
        <Home />
        <Footer />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
