import React from 'react';
import { Container, Grid, Typography, Button, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import heroImage from '../images/img1.jpg'; // Adicione a imagem apropriada

const HeroBackground = styled(Box)(({ theme }) => ({
  backgroundColor: '#111',
  paddingTop: '64px',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Mudar para flex-start para alinhar o conteúdo à esquerda
  color: 'white',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    height: 'auto',
    padding: '20px',
  },
}));

const HeroImage = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top center',
  width: '60%', // Aumentar a largura da imagem para 60%
  height: '100%', // Mantém a altura total
  [theme.breakpoints.down('md')]: {
    height: '40vh',
    width: '100%', // Em telas menores, a imagem ocupa toda a largura
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  width: '40%', // Mudar a largura para 40% para dar mais espaço à imagem
  paddingLeft: '40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    paddingLeft: '0',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

const HeroSection = () => {
  return (
    <HeroBackground id="hero">
      <HeroImage />
      <HeroContent>
        <Typography variant="h3" gutterBottom>
          Louise de Paula
        </Typography>
        <Typography variant="h5" gutterBottom>
          Engenheira Civil
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Button variant="contained" sx={{ backgroundColor: '#FF5722', color: 'white' }}>
            Baixar CV
          </Button>
          {/* <Button variant="outlined" sx={{ color: '#FF5722', borderColor: '#FF5722' }}>
            Meus Trabalhos
          </Button> */}
        </Box>
      </HeroContent>
    </HeroBackground>
  );
};

export default HeroSection;
