import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <table>
            
            <tr>
              <td>
              </td>
              <td>
              </td>
              <td>
              </td>
              <td>
                <button>CE</button>
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
          </table>{" "}
        </header>
      </div>
    );
  }
}

export default App;
