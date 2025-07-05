import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieControls from './MovieControls';

const MovieCard = ({ movie, type, disabled }) => {
    const { dispatch } = useContext(GlobalContext);

    return (
        <div className="movie-card">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} />
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                {type === 'add' ? (
                    <button
                        disabled={disabled}
                        onClick={() => dispatch({ type: 'ADD_TO_WATCHLIST', payload: movie })}
                    >
                        ➕ Add to Watchlist
                    </button>
                ) : (
                    <MovieControls movie={movie} type={type} />
                )}

            </div>
        </div>
    );
};

export default MovieCard;
