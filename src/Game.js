import React, { Component } from 'react';
import Board from './Board'
import { calculateWinner } from './tictactoe'
import './Game.css'

class Game extends Component {
  constructor() {
    super();
    this.state = {
      history: [
        { squares: Array(9).fill(null) }
      ],
      xIsNext: true
    }
  }

  render() {
    const current = this.state.history[this.state.history.length-1];
    const moves = this.state.history.map((step, move) => {
      const text = move ? `Mutarea ${move}` : `Start`;
      return (
        <li key={move}><a>{text}</a></li>
      );
    });
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{this.getStatus()}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const current = this.state.history[this.state.history.length-1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.currentPlayer();
    this.setState({
      history: this.state.history.concat([{squares}]),
      xIsNext: !this.state.xIsNext
    });
  }

  getStatus() {
    const current = this.state.history[this.state.history.length-1];
    const winner = calculateWinner(current.squares);
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${this.currentPlayer()}`;
    }
  }

  currentPlayer() {
    return this.state.xIsNext? 'X': '0';
  }
}

export default Game;