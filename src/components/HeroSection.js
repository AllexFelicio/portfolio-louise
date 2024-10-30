import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import heroImage from '../images/img1.jpg'; // Adicione a imagem apropriada

const HeroBackground = styled(Box)(({ theme }) => ({
  backgroundColor: '#141C24',
  paddingTop: '64px',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
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
  width: '50%',
  height: '100%',
  [theme.breakpoints.down('md')]: {
    height: '40vh',
    width: '100%',
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  width: '40%',
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
      <Typography variant="h3" gutterBottom={false} sx={{ marginBottom: 0 }}>
        Louise de Paula
      </Typography>
        <Box
          sx={{
            height: '2px',
            background: 'linear-gradient(to left, #141C24, #9B7424)',
            marginTop: '0px',
            width: '80%',
          }}
        />
        <Typography variant="h5" gutterBottom>
          Engenheira Civil
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Button variant="contained" sx={{ backgroundColor: '#9B7424', color: 'white' }}>
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
