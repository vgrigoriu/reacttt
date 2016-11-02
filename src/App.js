import React, { Component } from 'react';
import Board from './Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic Tac Toe</h2>
        </div>
        <div className="App-intro">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
