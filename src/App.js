import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Watchlist from './pages/Watchlist';
import Watched from './pages/Watched';
import Add from './pages/Add';
import { AppBar, Toolbar, Typography, Button, Box, Container, Avatar, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { motion } from 'framer-motion';
import './App.css';

const navLinks = [
  { label: 'Watchlist', to: '/' },
  { label: 'Watched', to: '/watched' },
  { label: 'Add', to: '/add' },
];

function App() {
  const location = window.location;
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <AppBar
          position="fixed"
          color="default"
          elevation={scrolled ? 12 : 6}
          sx={{
            background: scrolled
              ? 'rgba(35,35,35,0.92)'
              : 'rgba(35,35,35,0.82)',
            boxShadow: '0 2px 24px 0 #000a',
            backdropFilter: 'blur(18px)',
            borderBottom: '1.5px solid rgba(255,255,255,0.07)',
            transition: 'background 0.3s, box-shadow 0.3s',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            py: 0.5,
          }}
        >
          <Toolbar sx={{ minHeight: 64, px: { xs: 2, sm: 4 } }}>
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
                  background: 'none',
                  '&:hover': {
                    color: '#fff',
                    textShadow: '0 0 8px #e50914, 0 0 16px #e50914',
                    background: 'rgba(229,9,20,0.04)',
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
                    transition: 'all 0.3s',
                  } : {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 2,
                    height: 3,
                    borderRadius: 2,
                    background: 'transparent',
                    transition: 'all 0.3s',
                  },
                }}
              >
                {nav.label}
              </Button>
            ))}
            {/* Profile Avatar */}
            <IconButton onClick={handleAvatarClick} sx={{ ml: 2 }}>
              <Avatar sx={{ bgcolor: '#e50914', width: 40, height: 40 }}>
                <AccountCircleIcon sx={{ color: '#fff', fontSize: 32 }} />
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              onClick={handleMenuClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  minWidth: 180,
                  background: 'rgba(35,35,35,0.98)',
                  color: '#fff',
                  boxShadow: '0 4px 32px #000a',
                  borderRadius: 2,
                  p: 1,
                },
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem>
                <ListItemIcon>
                  <SettingsIcon sx={{ color: '#e50914' }} />
                </ListItemIcon>
                Profile & Settings
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Brightness4Icon sx={{ color: '#e50914' }} />
                </ListItemIcon>
                Theme (coming soon)
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </motion.div>
      {/* Animated background placeholder for Three.js/GSAP */}
      <Box id="background-animated" sx={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, pt: 10 }}>
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
