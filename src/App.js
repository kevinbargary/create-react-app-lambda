import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Foo() {
  return <div>Placeholder</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Foo />
        </header>
      </div>
    );
  }
}

export default App;
