// src/components/WhatsAppButton.js
import React from 'react';
import { IconButton } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const WhatsAppButton = () => {
  return (
    <IconButton
      component="a"
      href="https://wa.me/5515981394994" // Substitua pelo seu link do WhatsApp
      target="_blank"
      sx={{
        position: 'fixed',
        bottom: '20px', // Distância do fundo da tela
        right: '20px', // Distância da direita da tela
        backgroundColor: '#25D366', // Cor do WhatsApp
        color: 'white',
        '&:hover': {
          backgroundColor: '#128C7E', // Cor ao passar o mouse
        },
        zIndex: 1000, // Garante que o botão fique acima de outros elementos
      }}
    >
      <WhatsApp />
    </IconButton>
  );
};

export default WhatsAppButton;
