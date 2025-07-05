import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { motion } from 'framer-motion';
import './App.css';

const navLinks = [
  { label: 'Watchlist', to: '/' },
  { label: 'Watched', to: '/watched' },
  { label: 'Add', to: '/add' },
];

function App() {
  // Highlight active nav link
  const location = window.location;
  return (
    <Router>
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <AppBar position="static" color="default" elevation={6} sx={{ mb: 4, background: '#232323', boxShadow: '0 2px 16px 0 #000a' }}>
          <Toolbar>
            <MovieIcon sx={{ mr: 2, fontSize: 36, color: '#fff' }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 900, color: '#fff', letterSpacing: 1 }}>
              Movie Watchlist
            </Typography>
            {navLinks.map((nav) => (
              <Button
                key={nav.to}
                component={RouterLink}
                to={nav.to}
                sx={{
                  textTransform: 'none',
                  fontWeight: 700,
                  color: location.pathname === nav.to ? '#e50914' : '#fff',
                  mx: 1,
                  fontSize: 18,
                  letterSpacing: 1,
                  position: 'relative',
                  transition: 'color 0.2s',
                  '&:hover': {
                    color: '#fff',
                    textShadow: '0 0 8px #e50914, 0 0 16px #e50914',
                    background: 'rgba(229,9,20,0.08)',
                  },
                  '&::after': location.pathname === nav.to ? {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 2,
                    height: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, #e50914 60%, #b81d24 100%)',
                  } : {},
                }}
              >
                {nav.label}
              </Button>
            ))}
          </Toolbar>
        </AppBar>
      </motion.div>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
