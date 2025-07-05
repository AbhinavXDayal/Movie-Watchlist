import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';

const MovieControls = ({ movie, type }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
      {type === 'watchlist' && (
        <>
          <Button
            variant="outlined"
            color="success"
            size="small"
            startIcon={<CheckIcon />}
            onClick={() => dispatch({ type: 'ADD_TO_WATCHED', payload: movie })}
            sx={{ fontWeight: 600 }}
          >
            Watched
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<CloseIcon />}
            onClick={() => dispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie.imdbID })}
            sx={{ fontWeight: 600 }}
          >
            Remove
          </Button>
        </>
      )}

      {type === 'watched' && (
        <>
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<ReplayIcon />}
            onClick={() => dispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie })}
            sx={{ fontWeight: 600 }}
          >
            Re-add
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<CloseIcon />}
            onClick={() => dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie.imdbID })}
            sx={{ fontWeight: 600 }}
          >
            Remove
          </Button>
        </>
      )}
    </Stack>
  );
};

export default MovieControls;
