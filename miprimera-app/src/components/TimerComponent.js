import React, { Component } from "react";

export default class TimerComponent extends Component {
    constructor(){
        super()
        this.state={
          hour:new Date().getHours(),
          min:new Date().getMinutes()
        }
      }
  render() {
    return (
      <div>
        <div>
          <h1>Hola {this.props.nombre} son las {this.state.hour}:{this.state.min}</h1>
        </div>
        {/*Hacemos que el valor que aparezca inicialmente se el del atributo "name" del props del input */}
      </div>
    );
  }
}
