import React, { Component } from "react";

export default class TimerComponent extends Component {
    constructor(){
      //el super envia las props
        super()
        this.state={
          fecha:new Date(),
          hour:new Date().getHours(),
          min:new Date().getMinutes()
        }
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          fecha: new Date()
        });
      }
  render() {
    return (
      <div>
          <h1>Hola forma1 {this.props.nombre} son las {this.state.hour}:{this.state.min}</h1>
          <h1>Hola forma2 {this.props.nombre} son las {this.state.fecha.toLocaleTimeString()}</h1>
      </div>
    );
    
  }
  
}
