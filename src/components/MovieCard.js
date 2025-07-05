import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieControls from './MovieControls';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const MovieCard = ({ movie, type, disabled }) => {
    const { dispatch } = useContext(GlobalContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: 24 }}
        >
            <Card sx={{ display: 'flex', alignItems: 'center', borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    sx={{ width: 100, height: 150, objectFit: 'cover', borderRadius: 2, m: 2 }}
                    image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
                    alt={movie.Title}
                />
                <Box sx={{ flex: 1 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight={700}>{movie.Title}</Typography>
                        <Typography variant="body2" color="text.secondary">{movie.Year}</Typography>
                        {type === 'add' ? (
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={disabled}
                                sx={{ mt: 2, textTransform: 'none', fontWeight: 600 }}
                                onClick={() => dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })}
                            >
                                ➕ Add to Watchlist
                            </Button>
                        ) : (
                            <MovieControls movie={movie} type={type} />
                        )}
                    </CardContent>
                </Box>
            </Card>
        </motion.div>
    );
};

export default MovieCard;
