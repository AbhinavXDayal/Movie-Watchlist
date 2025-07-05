import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';
import { Box, Typography, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 4,
          mt: 2,
          p: 3,
          borderRadius: 3,
          background: 'linear-gradient(90deg, #181818 60%, #b81d24 100%)',
          boxShadow: 4,
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 48, color: '#b81d24' }} />
        <Box>
          <Typography variant="h4" fontWeight={900} color="#fff" gutterBottom>
            Watched Movies
          </Typography>
          <Typography variant="subtitle1" color="#b3b3b3">
            All the movies you’ve watched. Revisit or move them back to your watchlist!
          </Typography>
        </Box>
      </Box>
      {watched.length ? (
        <Grid container spacing={3} justifyContent="center">
          {watched.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
              <MovieCard movie={movie} type="watched" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography color="#b3b3b3" sx={{ mt: 6, textAlign: 'center', fontSize: 22 }}>
          No movies watched yet.
        </Typography>
      )}
    </Box>
  );
};

export default Watched;
