import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const MovieControls = ({ movie, type }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <div className="controls">
      {type === 'watchlist' && (
        <>
          <button onClick={() => dispatch({ type: 'ADD_TO_WATCHED', payload: movie })}>✅ Watched</button>
          <button onClick={() => dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie.imdbID })}>❌ Remove</button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button onClick={() => dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie })}>↩️ Re-add</button>
          <button onClick={() => dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie.imdbID })}>❌ Remove</button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
