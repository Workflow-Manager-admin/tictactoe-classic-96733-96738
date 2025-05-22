import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
/**
 * TicTacToe component implements a classic Tic Tac Toe game
 * with a 3x3 grid where players take turns marking X or O.
 * 
 * @returns {JSX.Element} The TicTacToe game UI
 */
function TicTacToe() {
  // Initialize game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('');
  
  // Calculate winner function
  const calculateWinner = (squares) => {
    // All possible winning combinations (rows, columns, diagonals)
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ];
    
    // Check each winning combination
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // If all three positions have the same non-null value, we have a winner
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    // If the board is full, it's a draw
    if (squares.every(square => square !== null)) {
      return 'draw';
    }
    
    // No winner yet
    return null;
  };
  
  // Handle cell click
  const handleClick = (index) => {
    // Create a copy of the board
    const newBoard = [...board];
    
    // Return early if there's a winner or cell is already filled
    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }
    
    // Make the move
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    
    // Check if there's a winner after the move
    const winner = calculateWinner(newBoard);
    if (winner) {
      if (winner === 'draw') {
        setGameStatus("It's a draw!");
      } else {
        setGameStatus(`Winner: ${winner}`);
      }
    } else {
      setGameStatus(`Next player: ${!xIsNext ? 'X' : 'O'}`);
    }
  };
  
  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus('Next player: X');
  };
  
  // Render each square
  const renderSquare = (index) => {
    return (
      <button 
        className="square" 
        onClick={() => handleClick(index)}
        disabled={!!calculateWinner(board) || board[index]}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="tictactoe">
      <h1 className="game-title">Tic Tac Toe Classic</h1>
      
      <div className="game-status">{gameStatus || 'Next player: X'}</div>
      
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      
      <button className="btn reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
