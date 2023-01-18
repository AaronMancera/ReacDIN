import React, { Component } from "react";

export default class RelojComponent extends Component {
    constructor() {
        //el super envia las props
        super()
        this.state = {
            fecha: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
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
                <h1>Son las {this.state.fecha.toLocaleTimeString()}</h1>
            </div>
        );

    }

}
