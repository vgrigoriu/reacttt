import React, { Component } from 'react';
import Square from './Square'
import { calculateWinner } from './tictactoe'
import './Board.css'

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
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

  render() {
    return (
      <div>
        <div className="status">{this.getStatus()}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
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

export default Board;