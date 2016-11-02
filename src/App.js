import React, { Component } from 'react';
import Square from './Square'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
        </div>
        <p className="App-intro">
          <Square />
        </p>
      </div>
    );
  }
}

export default App;
