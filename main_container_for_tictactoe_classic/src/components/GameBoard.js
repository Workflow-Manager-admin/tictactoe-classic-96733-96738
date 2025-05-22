import React, { useState, useEffect } from 'react';
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
  const [winningLine, setWinningLine] = useState(null);
  
  useEffect(() => {
    // Check for a winning line to highlight
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
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningLine(lines[i]);
        return;
      }
    }
    
    setWinningLine(null);
  }, [board]);
  // Render a square at the given index
  const renderSquare = (index) => {
    // Set color styles for X and O
    const getSquareStyle = () => {
      const baseStyle = {
        backgroundColor: winningLine?.includes(index) ? 'rgba(232, 122, 65, 0.3)' : 'transparent'
      };
      
      if (board[index] === 'X') {
        return { ...baseStyle, color: 'var(--kavia-orange)' };
      } else if (board[index] === 'O') {
        return { ...baseStyle, color: '#4ECDC4' };
      }
      
      return baseStyle;
    };

    // Additional classes for winning squares
    const squareClasses = `square ${winningLine?.includes(index) ? 'winning-square' : ''}`;

    return (
      <button 
        className={squareClasses}
        onClick={() => onSquareClick(index)}
        disabled={!!calculateWinner(board) || board[index]}
        style={getSquareStyle()}
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
