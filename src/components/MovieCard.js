import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieControls from './MovieControls';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const MovieCard = ({ movie, type, disabled }) => {
    const { dispatch } = useContext(GlobalContext);
    const [spoiler, setSpoiler] = useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 8px 1px #e5091444' }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: 24, position: 'relative' }}
        >
            <Card sx={{ display: 'flex', alignItems: 'center', borderRadius: 3, boxShadow: 3, position: 'relative', overflow: 'hidden' }}>
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
                {/* Spoiler Overlay */}
                <AnimatePresence>
                    {spoiler && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(20,20,20,0.92)',
                                backdropFilter: 'blur(6px)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 10,
                            }}
                        >
                            <Typography variant="h6" sx={{ color: '#fff', mb: 2, textShadow: '0 0 8px #e50914' }}>
                                Spoiler Hidden!
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{ fontWeight: 900, fontSize: 18, px: 4, boxShadow: '0 0 16px #e50914' }}
                                onClick={() => setSpoiler(false)}
                            >
                                Reveal Movie
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
};

export default MovieCard;
