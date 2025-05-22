import React from 'react';
import './GameBoard.css';

// PUBLIC_INTERFACE
/**
 * GameBoard component renders the 3x3 grid for TicTacToe
 * and handles the rendering of individual squares.
 * 
 * @param {Array} board - The current state of the board (array of 9 values: null, 'X', or 'O')
 * @param {Function} onSquareClick - Function to call when a square is clicked
 * @param {Function} calculateWinner - Function to determine if there's a winner
 * @returns {JSX.Element} The GameBoard UI
 */
function GameBoard({ board, onSquareClick, calculateWinner }) {
  // Render a square at the given index
  const renderSquare = (index) => {
    return (
      <button 
        className="square" 
        onClick={() => onSquareClick(index)}
        disabled={!!calculateWinner(board) || board[index]}
      >
        {board[index]}
      </button>
    );
  };

  return (
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
  );
}

export default GameBoard;
