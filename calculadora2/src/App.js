import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CalculadoraComponent from "./components/CalculadoraComponent";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <CalculadoraComponent></CalculadoraComponent>
        </header>
      </div>
    );
  }
}

export default App;
