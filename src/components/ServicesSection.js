import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BuildIcon from '@mui/icons-material/Build';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SearchIcon from '@mui/icons-material/Search';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import useMediaQuery from '@mui/material/useMediaQuery';

const services = [
  {
    title: 'Gerenciamento de Obras',
    description: 'Expertise in building design and construction.',
    icon: <EngineeringIcon sx={{ fontSize: 60, color: '#FF5722' }} />,
  },
  {
    title: 'Inspeção Predial',
    description: 'Efficient management of construction projects.',
    icon: <BuildIcon sx={{ fontSize: 60, color: '#FF5722' }} />,
  },
  {
    title: 'Laudos',
    description: 'Analysis and design of structural components.',
    icon: <AssessmentIcon sx={{ fontSize: 60, color: '#FF5722' }} />,
  },
  {
    title: 'Vistorias',
    description: 'Providing expert advice for your projects.',
    icon: <SearchIcon sx={{ fontSize: 60, color: '#FF5722' }} />,
  },
  {
    title: 'Checklist',
    description: 'Upgrading existing structures.',
    icon: <CheckCircleIcon sx={{ fontSize: 60, color: '#FF5722' }} />,
  },
];

const ServicesSection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm')); // Detecta tela pequena

  return (
    <Box sx={{ backgroundColor: '#222', color: 'white', padding: '50px 20px' }} id="services">
      <Typography variant="h4" align="center" gutterBottom>
        Serviços
      </Typography>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        animation="slide"
        timeout={500}
        sx={{ padding: '20px' }}
        navButtonsProps={{
          style: {
            backgroundColor: '#FF5722',
            color: 'white',
          },
        }}
        autoPlay={false}
      >
        {Array.from({ length: Math.ceil(services.length / (isSmallScreen ? 1 : 4)) }).map((_, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            sx={{ padding: '10px' }}
          >
            {services.slice(index * (isSmallScreen ? 1 : 4), index * (isSmallScreen ? 1 : 4) + (isSmallScreen ? 1 : 4)).map((service, i) => (
              <Card 
                key={i} 
                sx={{ 
                  flex: 1, 
                  margin: '0 10px', 
                  height: '250px', // Define uma altura fixa
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  backgroundColor: '#111', // Cor de fundo dos cards
                  color: 'white', // Cor do texto
                }}
              >
                <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  {service.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ color: 'white' }}>{service.title}</Typography> {/* Texto em branco */}
                  <Typography variant="body2" sx={{ color: 'white' }}>{service.description}</Typography> {/* Texto em branco */}
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default ServicesSection;
