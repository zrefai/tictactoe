import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import BoardRow from './BoardRow';
import GameStatus from './GameStatus';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Fill an empty array of 9 spaces to represent board
      board: Array(9).fill(null),
      //True if x's turn, false if o's turn
      xTurn: true,
    };
    this.handleMove = this.handleMove.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleTurn() {
    return this.state.xTurn ? 'X' : 'O';
  }

  winStatus(board) {
    const possibleWins = [
      [0, 1, 2],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 7],
      [0, 3, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
    ];
    // Loops through possible wins to check if state board has a win
    for (let i = 0; i < possibleWins.length; i++) {
      const [x, y, z] = possibleWins[i];
      // Check null value and if win is played
      if (board[x] && board[x] === board[y] && board[x] == board[z]) {
        return 'Win';
      }
    }
    //If board is full and no win triggered, then tie
    if (board.indexOf(null) === -1) {
      return 'Tie';
    }
    return 'Play';
  }

  handleNewGame() {
    this.setState({
      board: Array(9).fill(null),
      xTurn: true,
    });
  }

  handleMove(index) {
    //Separate board from state
    let newBoard = this.state.board.slice();
    // Check current player turn
    const turn = this.handleTurn();
    // Check if a player has won or if space is already taken
    if (this.state.board[index] || this.winStatus(this.state.board) === 'Win') {
      return null;
    }
    // Add turn to copy of state array
    newBoard[index] = turn;

    // Sets newBoard to board if newBoard is a win, but does not change turns
    if (this.winStatus(newBoard) === 'Win') {
      this.setState({
        board: newBoard,
      });
      return null;
    }

    // Set state to new board and change turn
    this.setState({
      board: newBoard,
      xTurn: !this.state.xTurn,
    });
  }

  render() {
    return (
      <View style={boardStyles.container}>
        <BoardRow
          tiles={this.state.board}
          index={0}
          handleMove={this.handleMove}
        />
        <BoardRow
          tiles={this.state.board}
          index={3}
          handleMove={this.handleMove}
        />
        <BoardRow
          tiles={this.state.board}
          index={6}
          handleMove={this.handleMove}
        />
        <GameStatus
          playerTurn={this.handleTurn()}
          winStatus={this.winStatus(this.state.board)}
          onNewGame={this.handleNewGame}
        />
      </View>
    );
  }
}

const boardStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
