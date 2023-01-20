import React, { Component } from 'react';

export default class CalculadoraComponent extends Component {
    constructor() {
        super()
        this.state = {
            mostrar: "",
            resultado:0
        }
    }
    botonPulsado(e) {
        alert("pulsado "+e)
    }
    render() {
        return (
            <div>
                <p>{this.state.mostrar}</p>
                <table>
                    <tr>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                        </td>
                        <td>
                            <button onClick={this.botonPulsado} >CE</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>1</button>
                        </td>
                        <td>
                            <button>2</button>
                        </td>
                        <td>
                            <button>3</button>
                        </td>
                        <td>
                            <button>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>4</button>
                        </td>
                        <td>
                            <button>5</button>
                        </td>
                        <td>
                            <button>6</button>
                        </td>
                        <td>
                            <button>X</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>7</button>
                        </td>
                        <td>
                            <button>8</button>
                        </td>
                        <td>
                            <button>9</button>
                        </td>
                        <td>
                            <button>-</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>.</button>
                        </td>
                        <td>
                            <button>0</button>
                        </td>
                        <td>
                            <button>=</button>
                        </td>
                        <td>
                            <button>+</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
    
}

