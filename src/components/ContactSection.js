// src/components/ContactSection.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#141C24', color: 'white', padding: '10px 0', textAlign: 'center'}} id="contact">
      <Typography variant="h4" gutterBottom>
      Entre em contato
      </Typography>
      {/* <Typography variant="body1" gutterBottom>
        Follow me on social media
      </Typography> */}
      <Box>
        <IconButton
          component="a"
          href="https://www.instagram.com/ll.engenharia_/" // Substitua pelo seu link do Instagram
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/5515981394994" // Substitua pelo seu link do WhatsApp
          target="_blank"
          sx={{ color: 'white', marginLeft: '20px' }}
        >
          <WhatsApp />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ marginTop: '15px', marginBottom: '5px' }}>
        &copy; {new Date().getFullYear()} Louise de Paula. Todos os direitos reservados.
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '5px', marginBottom: '0' }}>
        Criado por Alex Felício
      </Typography>
    </Box>
  );
};

export default ContactSection;
