import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import heroImage from '../images/img1.jpg'; // Adicione a imagem apropriada

const HeroBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to top, rgba(20, 28, 36, 0.9) 10%, rgba(155, 116, 36, 0.1) 100%)', // Degradê ocupa menos espaço
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
        <Typography variant="h7" gutterBottom align="justify">
           Formada pela Faculdade de Engenharia de Sorocaba - FACENS, atualmente estou cursando uma pós-graduação em Patologia. 
           Tenho experiência no gerenciamento e execução de projetos de construção de casas de alto padrão, 
           o que me permite oferecer soluções técnicas de qualidade e adequadas às necessidades dos meus clientes. 
           Com um olhar atento aos detalhes e uma abordagem focada na excelência, 
           busco garantir que cada serviço reflita não apenas a estética, mas também a segurança e a durabilidade.
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Button variant="contained" sx={{ backgroundColor: '#9B7424', color: 'white','&:hover': {backgroundColor: '#7B5C1C',},  }}>
            Baixar CV
          </Button>
        </Box>
      </HeroContent>
    </HeroBackground>
  );
};

export default HeroSection;
