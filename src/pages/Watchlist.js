import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div className="container">
      <h2>🎥 Watchlist</h2>
      {watchlist.length ? (
        watchlist.map((movie) => <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />)
      ) : (
        <p>No movies in your watchlist. Add some!</p>
      )}
    </div>
  );
};

export default Watchlist;
