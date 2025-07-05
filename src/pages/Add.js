import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';
import { Box, Typography, TextField, Button, Grid, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';

const Add = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { watchlist, watched } = useContext(GlobalContext);

    const search = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        const res = await axios.get(`https://www.omdbapi.com/?apikey=94f10745&s=${query}`);
        setResults(res.data.Search || []);
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h4" fontWeight={900} color="#fff" gutterBottom>
                ➕ Add Movie
            </Typography>
            <Box component="form" onSubmit={search} sx={{ display: 'flex', gap: 2, mb: 4 }}>
                <TextField
                    variant="outlined"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon color="primary" />
                            </InputAdornment>
                        ),
                        sx: { background: '#181818', color: '#fff', borderRadius: 2 },
                    }}
                />
                <Button type="submit" variant="contained" color="primary" size="large" sx={{ fontWeight: 700 }}>
                    Search
                </Button>
            </Box>
            <Grid container spacing={3}>
                {results.map((movie) => (
                    <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                            <MovieCard
                                movie={movie}
                                type="add"
                                disabled={
                                    watchlist.some((m) => m.imdbID === movie.imdbID) ||
                                    watched.some((m) => m.imdbID === movie.imdbID)
                                }
                            />
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Add;
