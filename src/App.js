import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';
import './App.css';

function App() {
  return (
    <Router>
      <header className="header">
        <h1>🎬 Movie Watchlist</h1>
        <nav>
          <Link to="/">Watchlist</Link>
          <Link to="/watched">Watched</Link>
          <Link to="/add">Add</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
