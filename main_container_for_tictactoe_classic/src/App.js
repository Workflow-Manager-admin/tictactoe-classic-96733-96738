import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

// PUBLIC_INTERFACE
/**
 * Main App component that serves as the container for the TicTacToe Classic game.
 * This component handles the overall layout and structure of the application.
 * 
 * @returns {JSX.Element} The App UI
 */
function App() {
  return (
    <div className="app">
      {/* Header/Navigation Bar */}
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

      {/* Main Game Container */}
      <main className="game-container">
        <div className="container">
          <TicTacToe />
        </div>
      </main>

      {/* Footer - placeholder for future enhancements */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            {/* Placeholder for future features like:
                - Game history
                - Settings
                - Player profiles
                - Multiplayer options
            */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;