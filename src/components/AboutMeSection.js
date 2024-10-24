// src/components/AboutMeSection.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutMeSection = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: 'white', padding: '50px 20px', textAlign: 'center' }} id="about">
      <Typography variant="h4" gutterBottom>
        Sobre mim
      </Typography>
      <Typography variant="body1">
      Sou uma engenheira civil profissional com mais de 6 anos de experiência em projetar e gerenciar projetos de construção.
      Minha paixão está em fornecer soluções de alta qualidade que atendam às necessidades dos meus clientes.
      </Typography>
    </Box>
  );
};

export default AboutMeSection;
