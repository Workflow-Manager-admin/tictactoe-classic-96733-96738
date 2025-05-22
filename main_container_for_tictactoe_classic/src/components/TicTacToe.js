import React, { useState } from 'react';
import './TicTacToe.css';
import GameBoard from './GameBoard';
import GameControls from './GameControls';

// PUBLIC_INTERFACE
/**
 * TicTacToe component implements a classic Tic Tac Toe game
 * with a 3x3 grid where players take turns marking X or O.
 * Features include:
 * - 3x3 game board
 * - Turn tracking between X and O players
 * - Win/tie detection
 * - Score tracking across multiple games
 * - Game reset functionality
 * 
 * @returns {JSX.Element} The TicTacToe game UI
 */
function TicTacToe() {
  // Initialize game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('');
  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    draws: 0
  });
  
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
        // Update draw count in scores
        setScores(prevScores => ({
          ...prevScores,
          draws: prevScores.draws + 1
        }));
      } else {
        setGameStatus(`Winner: ${winner}`);
        // Update winner's score
        setScores(prevScores => ({
          ...prevScores,
          [winner]: prevScores[winner] + 1
        }));
      }
    } else {
      setGameStatus(`Next player: ${!xIsNext ? 'X' : 'O'}`);
    }
  };
  
  // Reset the game while maintaining scores
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus('Next player: X');
  };
  
  // Reset game and scores
  const resetAll = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameStatus('Next player: X');
    setScores({
      X: 0,
      O: 0,
      draws: 0
    });
  };

  return (
    <div className="tictactoe">
      <h1 className="game-title">Tic Tac Toe Classic</h1>
      
      <div className="scoreboard">
        <div className="score-item">
          <span className="player-x">X</span>: {scores.X}
        </div>
        <div className="score-item">
          <span className="player-o">O</span>: {scores.O}
        </div>
        <div className="score-item">
          Draws: {scores.draws}
        </div>
      </div>
      
      <div className="game-status">
        {gameStatus || (
          <span>
            Next player: {' '}
            <span className={xIsNext ? 'player-x' : 'player-o'}>
              {xIsNext ? 'X' : 'O'}
            </span>
          </span>
        )}
      </div>
      
      <GameBoard 
        board={board} 
        onSquareClick={handleClick}
        calculateWinner={calculateWinner}
      />
      
      <GameControls 
        onResetGame={resetGame}
        onResetAll={resetAll}
      />
    </div>
  );
}

export default TicTacToe;
