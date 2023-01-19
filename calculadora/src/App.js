import logo from './logo.svg';
import './App.css';
import { Component} from 'react';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" ></img>
          <h1>Prueba</h1>
        </header>
      </div>
    );
  }
}

export default App;

