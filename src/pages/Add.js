import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

const Add = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const { watchlist, watched } = useContext(GlobalContext);

    const search = async (e) => {
        e.preventDefault();
        const res = await axios.get(`https://www.omdbapi.com/?apikey=94f10745&s=${query}`);
        setResults(res.data.Search || []);
    };

    return (
        <div className="container">
            <h2>➕ Add Movie</h2>
            <form onSubmit={search}>
                <input type="text" placeholder="Search movies..." value={query} onChange={(e) => setQuery(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div className="search-results">
                {results.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        type="add"
                        disabled={
                            watchlist.some((m) => m.imdbID === movie.imdbID) ||
                            watched.some((m) => m.imdbID === movie.imdbID)
                        }
                    />

                ))}
            </div>
        </div>
    );
};

export default Add;
