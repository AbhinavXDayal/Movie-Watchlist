import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalProvider } from './context/GlobalContext';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AnimatedBackground from './three/AnimatedBackground';

const netflixTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141414',
      paper: '#181818',
    },
    primary: {
      main: '#e50914', // Netflix red
    },
    secondary: {
      main: '#b81d24',
    },
    text: {
      primary: '#fff',
      secondary: '#b3b3b3',
    },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
    h5: { fontWeight: 900 },
    h6: { fontWeight: 700 },
  },
  shape: {
    borderRadius: 12,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={netflixTheme}>
    <CssBaseline />
    <AnimatedBackground />
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
