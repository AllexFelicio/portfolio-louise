// src/components/AboutMeSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutMeSection = () => {
  return (
    <Box
  sx={{
    backgroundColor: '#141C24',
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center',
    position: 'relative', // necessário para o gradiente
  }}
  id="about"
>
  <Typography variant="h4" gutterBottom>
    Sobre mim
  </Typography>
  <Typography variant="body1">
    Sou uma engenheira civil profissional com mais de 6 anos de experiência em projetar e gerenciar projetos de construção.
    Minha paixão está em fornecer soluções de alta qualidade que atendam às necessidades dos meus clientes.
  </Typography>
  {/* Linha com gradiente */}
  <Box
    sx={{
      height: '2px',
      background: 'linear-gradient(to right, #1A2530, #9B7424)',
      margin: '20px auto 0',
      width: '80%',
    }}
  />
</Box>
    
  );
};

export default AboutMeSection;
