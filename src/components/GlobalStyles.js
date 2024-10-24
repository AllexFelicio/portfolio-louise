import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import textureImage from '../images/fundo.jpg';

// Criação de tema global para garantir que o body não tenha margens
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          backgroundColor: '#111',
          backgroundImage: `url(${textureImage})`, // Adicione o caminho para sua imagem de textura
          backgroundSize: 'cover', // Ajuste o tamanho da imagem
          backgroundPosition: 'center', // Centraliza a imagem
        },
        html: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
});

const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default GlobalTheme;
