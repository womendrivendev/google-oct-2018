import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Subscription from "./subscription";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tech Allies App</h1>
        <Subscription />
      </div>
    );
  }
}

export default App;
