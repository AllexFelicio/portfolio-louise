import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY - 100; // Ajuste o valor conforme necessário
      window.scrollTo({ top: offset, behavior: 'smooth' });
      setDrawerOpen(false); // Fecha o menu ao clicar em um item
    }
  };

  const menuItems = [
    { text: 'Sobre Mim', onClick: () => scrollToSection('about') },
    { text: 'Trabalhos', onClick: () => scrollToSection('portfolio') },
    { text: 'Serviços', onClick: () => scrollToSection('services') },
    { text: 'Contatos', onClick: () => scrollToSection('contact') },
  ];

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        boxShadow: 'none',
        backgroundColor: '#10151B',
        borderRadius: 2,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Meu Portfólio
        </Typography>
        
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', md: 'none' }, color: '#FF5722' }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          {menuItems.map((item, index) => (
            <Button key={index} sx={{ color: 'white', margin: '0 10px' }} onClick={item.onClick}>
              {item.text}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#9B7424',
              color: 'white',
              '&:hover': {
                backgroundColor: '#7B5C1C',
              },
            }}
            onClick={() => scrollToSection('contact')}
          >
            Contrate-me!
          </Button>
        </Box>
      </Toolbar>

      {/* Drawer for mobile menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#141C24',
            color: 'white',
          },
        }}
      >
        <Box
          role="presentation"
          sx={{ width: 250 }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {menuItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                width: '100%',
                justifyContent: 'flex-start',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#FF5722',
                },
                padding: '10px 20px',
              }}
              onClick={item.onClick}
            >
              {item.text}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              width: '100%',
              justifyContent: 'flex-start',
              backgroundColor: '#FF5722',
              color: 'white',
              '&:hover': {
                backgroundColor: '#E64A19',
              },
              padding: '10px 20px',
              marginTop: '10px',
            }}
            onClick={() => scrollToSection('contact')}
          >
            Contrate-me!
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};


export default Header;
