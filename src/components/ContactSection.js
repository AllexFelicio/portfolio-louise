// src/components/ContactSection.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material';

const ContactSection = () => {
  return (
    <Box sx={{ backgroundColor: '#111', color: 'white', padding: '50px 0', textAlign: 'center' }} id="contact">
      <Typography variant="h4" gutterBottom>
      Entre em contato
      </Typography>
      {/* <Typography variant="body1" gutterBottom>
        Follow me on social media
      </Typography> */}
      <Box>
        <IconButton
          component="a"
          href="https://www.instagram.com/yourprofile" // Substitua pelo seu link do Instagram
          target="_blank"
          sx={{ color: 'white' }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          href="https://wa.me/yourphonenumber" // Substitua pelo seu link do WhatsApp
          target="_blank"
          sx={{ color: 'white', marginLeft: '20px' }}
        >
          <WhatsApp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ContactSection;
