import React, { Component } from 'react';
import Board from './Board'
import { calculateWinner } from './tictactoe'
import './Game.css'

class Game extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={this.state.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{this.getStatus()}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.currentPlayer();
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  }

  getStatus() {
    const winner = calculateWinner(this.state.squares);
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