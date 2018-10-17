import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import Subscription from "./components/subscription";
import Profile from "./components/Profile";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/subscribe" component={Subscription} />
            <Route exact path="/" component={Subscription} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
