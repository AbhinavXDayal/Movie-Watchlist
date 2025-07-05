import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';
import { Box, Typography, Grid, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MovieIcon from '@mui/icons-material/Movie';
import { Link as RouterLink } from 'react-router-dom';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          mt: 2,
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(90deg, #181818 60%, #e50914 100%)',
          boxShadow: 4,
        }}
      >
        <MovieIcon sx={{ fontSize: 48, color: '#e50914' }} />
        <Box>
          <Typography variant="h4" fontWeight={900} color="#fff" gutterBottom>
            Your Watchlist
          </Typography>
          <Typography variant="subtitle1" color="#b3b3b3">
            All your must-watch movies in one place. Add, rate, and manage your favorites!
          </Typography>
        </Box>
      </Box>
      {/* Movie Grid */}
      {watchlist.length ? (
        <Grid container spacing={3} justifyContent="center">
          {watchlist.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard movie={movie} type="watchlist" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography color="#b3b3b3" sx={{ mt: 6, textAlign: 'center', fontSize: 22 }}>
          No movies in your watchlist. Add some!
        </Typography>
      )}
      {/* Floating Add Button */}
      <Fab
        color="primary"
        aria-label="add"
        component={RouterLink}
        to="/add"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 1000,
          boxShadow: 6,
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default Watchlist;
