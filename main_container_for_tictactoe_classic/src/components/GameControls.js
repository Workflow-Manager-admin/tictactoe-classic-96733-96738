import React from 'react';
import './GameControls.css';

// PUBLIC_INTERFACE
/**
 * GameControls component provides user interface controls for the TicTacToe game
 * including reset buttons and placeholders for future enhancements.
 * 
 * @param {Function} onResetGame - Function to call to reset the current game
 * @param {Function} onResetAll - Function to call to reset the entire game state including scores
 * @returns {JSX.Element} The GameControls UI
 */
function GameControls({ onResetGame, onResetAll }) {
  return (
    <div className="game-controls">
      <button className="btn reset-button" onClick={onResetGame}>
        New Game
      </button>
      <button className="btn reset-all-button" onClick={onResetAll}>
        Reset Scores
      </button>
      
      {/* Placeholder for future controls/enhancements */}
      <div className="future-controls-placeholder"></div>
    </div>
  );
}

export default GameControls;
