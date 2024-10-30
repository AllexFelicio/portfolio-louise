import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6F00',  // Laranja para os botões e destaques
    },
    background: {
      default: '#141C24',  // Fundo escuro
      paper: '#1E1E1E',   // Cor para cards e seções
    },
    text: {
      primary: '#FFFFFF',  // Texto branco
      secondary: '#AAAAAA',  // Texto secundário
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'bold',
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
