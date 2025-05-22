import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

// PUBLIC_INTERFACE
/**
 * Main App component that renders the TicTacToe game
 * @returns {JSX.Element} The App UI
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <div className="game-name">TicTacToe Classic</div>
          </div>
        </div>
      </nav>

      <main className="game-container">
        <div className="container">
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;