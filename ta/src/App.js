import React, { Component } from "react";
import "./App.scss";
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
