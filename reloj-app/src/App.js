import logo from './logo.svg';
import './App.css';
import { Component} from 'react';
import RelojComponent from './components/RelojComponent';
import ToggleComponent from './components/ToggleComponent';
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
          <RelojComponent></RelojComponent>
          <ToggleComponent></ToggleComponent>
        </header>
      </div>
    );
  }
}

export default App;
