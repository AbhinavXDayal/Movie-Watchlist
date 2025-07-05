import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <Router>
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <AppBar position="static" color="default" elevation={2} sx={{ mb: 4 }}>
          <Toolbar>
            <MovieIcon sx={{ mr: 2, fontSize: 36 }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              Movie Watchlist
            </Typography>
            <Button color="primary" component={RouterLink} to="/" sx={{ textTransform: 'none', fontWeight: 500 }}>
              Watchlist
            </Button>
            <Button color="primary" component={RouterLink} to="/watched" sx={{ textTransform: 'none', fontWeight: 500 }}>
              Watched
            </Button>
            <Button color="primary" component={RouterLink} to="/add" sx={{ textTransform: 'none', fontWeight: 500 }}>
              Add
            </Button>
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
