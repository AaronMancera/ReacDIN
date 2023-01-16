import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloComponent from "./components/HelloComponent";
import InputComponent from "./components/InputComponent";
import TimerComponent from "./components/TimerComponent";

class App extends Component {
  constructor(){
    super()
    this.state={
      name:'Jacobo'
    }
  }

  changeName=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <HelloComponent nombre={this.state.name}></HelloComponent>
        <InputComponent nombre={this.state.name} cambiarNombre={this.changeName}></InputComponent>
        <TimerComponent nombre={this.state.name} ></TimerComponent>
      </header>
    </div>
  );
  }
}

export default App;
