import React, { Component } from "react";
import "./App.scss";
import Subscription from "./subscription";
import Profile from "./components/Profile";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Tech Allies App</h1>
        <Subscription />
        <Profile />
      </div>
    );
  }
}

export default App;
