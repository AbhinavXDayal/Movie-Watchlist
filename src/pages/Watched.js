import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MovieCard from '../components/MovieCard';

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="container">
      <h2>✅ Watched Movies</h2>
      {watched.length ? (
        watched.map((movie) => <MovieCard key={movie.imdbID} movie={movie} type="watched" />)
      ) : (
        <p>No movies watched yet.</p>
      )}
    </div>
  );
};

export default Watched;
