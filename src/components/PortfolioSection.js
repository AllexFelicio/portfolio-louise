import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

const PortfolioBackground = styled(Box)(() => ({
  backgroundColor: '#222', // Mantém a cor de fundo #222
  padding: '50px 0',
  color: 'white',
}));

const projects = [
  { title: 'Project A', image: 'https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg', description: 'Building Design' },
  { title: 'Project B', image: 'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png', description: 'Bridge Construction' },
  { title: 'Project C', image: 'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png', description: 'Stadium Renovation' },
  // Adicione mais projetos conforme necessário
];

const PortfolioSection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm')); // Detecta tela pequena

  return (
    <PortfolioBackground id="portfolio">
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Trabalhos
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
          autoPlay={false} // Desativa autoplay para melhor controle
        >
          {/* Cria um array para o carrossel que mostra 1 ou 3 itens por vez, dependendo do tamanho da tela */}
          {Array.from({ length: Math.ceil(projects.length / (isSmallScreen ? 1 : 3)) }).map((_, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              {projects.slice(index * (isSmallScreen ? 1 : 3), index * (isSmallScreen ? 1 : 3) + (isSmallScreen ? 1 : 3)).map((project, i) => (
                <Card key={i} sx={{ backgroundColor: '#111', margin: '10px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ color: 'white' }}>{project.title}</Typography> {/* Texto em branco */}
                    <Typography variant="body2" sx={{ color: 'white' }}>{project.description}</Typography> {/* Texto em branco */}
                  </CardContent>
                </Card>
              ))}
            </Box>
          ))}
        </Carousel>
        <Box textAlign="center" sx={{ mt: 4 }}>
          <Button variant="contained" sx={{ backgroundColor: '#FF5722', color: 'white' }}>
            Ver Mais
          </Button>
        </Box>
      </Container>
    </PortfolioBackground>
  );
};

export default PortfolioSection;
