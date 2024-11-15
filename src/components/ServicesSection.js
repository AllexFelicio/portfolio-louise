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
    description: 'O gerenciamento eficaz assegura a qualidade e a segurança das obras, além de otimizar recursos e minimizar riscos.',
    icon: <EngineeringIcon sx={{ fontSize: 60, color: '#9B7424' }} />,
  },
  {
    title: 'Inspeção Predial',
    description: 'O processo inclui a identificação de possíveis problemas, como fissuras, infiltrações e deterioração, assegurando que a edificação esteja em conformidade com as normas e padrões de segurança.',
    icon: <BuildIcon sx={{ fontSize: 60, color: '#9B7424' }} />,
  },
  {
    title: 'Laudos',
    description: 'Laudos são utilizados para fundamentar decisões sobre manutenção, reformas ou intervenções em edificações, além de serem essenciais para processos legais e contratuais.',
    icon: <AssessmentIcon sx={{ fontSize: 60, color: '#9B7424' }} />,
  },
  {
    title: 'Vistorias',
    description: 'As vistorias garantem que o trabalho executado atenda às especificações e à legislação vigente, além de fornecer uma avaliação objetiva do estado atual da construção.',
    icon: <SearchIcon sx={{ fontSize: 60, color: '#9B7424' }} />,
  },
  {
    title: 'Checklist',
    description: 'O checklist ajuda a identificar itens pendentes ou não conformidades, promovendo a organização e a eficiência na execução das obras e manutenções.',
    icon: <CheckCircleIcon sx={{ fontSize: 60, color: '#9B7424' }} />,
  },
];

const ServicesSection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm')); // Detecta tela pequena

  return (
    <Box sx={{ backgroundColor: '#141C24', color: 'white', padding: '50px 20px' }} id="services">
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
            backgroundColor: '#9B7424',
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
                  backgroundColor: '#1A2530', // Cor de fundo dos cards
                  color: 'white', // Cor do texto
                }}
              >
                <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                  {service.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ color: 'white' }}>{service.title}</Typography> {/* Texto em branco */}
                  <Typography variant="body2" sx={{ color: 'white' }} >{service.description}</Typography> {/* Texto em branco */}
                </CardContent>
              </Card>
            ))}
          </Box>
        ))}
      </Carousel>
      <Box
    sx={{
      height: '2px',
      background: 'linear-gradient(to right, #1A2530, #9B7424)',
      margin: '20px auto 0',
      width: '68%',
    }}
  />
    </Box>
  );
};

export default ServicesSection;
