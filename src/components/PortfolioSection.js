import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Adicione esta linha
import useMediaQuery from '@mui/material/useMediaQuery';
//#1A2530
const PortfolioBackground = styled(Box)(() => ({
  backgroundColor: '#141C24',
  padding: '50px 0',
  color: 'white',
}));

const projects = [
  { id: 'projectA', title: 'Barn House', image: 'https://lampur.com.br/wp-content/smush-webp/2020/05/BARN-HOUSES-LAMPUR-engenharia-62-2.jpg.webp', description: 'Fazenda Boa Vista' },
  { id: 'projectB', title: 'Garden House', image: 'https://lampur.com.br/wp-content/smush-webp/2021/02/IMG_2056.jpg.webp', description: 'Fazenda Boa Vista' },
  { id: 'projectC', title: 'Residência A & M ', image: 'https://i.ibb.co/7t0Smxn/27.jpg', description: 'Fazenda Da Grama' },
  { id: 'projectD', title: 'Residência V & B', image: 'https://i.ibb.co/nwTvPN2/Whats-App-Image-2024-11-12-at-14-34-28.jpg', description: 'Aldeia Da Serra' },
  { id: 'projectE', title: 'Reforma Jorge Y.', image: 'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png', description: 'Fazenda Boa Vista' },
];

const PortfolioSection = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

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
              backgroundColor: '#9B7424',
              color: 'white',
            },
          }}
          autoPlay={false}
        >
          {Array.from({ length: Math.ceil(projects.length / (isSmallScreen ? 1 : 3)) }).map((_, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              {projects.slice(index * (isSmallScreen ? 1 : 3), index * (isSmallScreen ? 1 : 3) + (isSmallScreen ? 1 : 3)).map((project, i) => (
                <Link key={i} to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Link para a página de detalhes */}
                  <Card sx={{ backgroundColor: '#1A2530', margin: '10px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                    />
                    <CardContent>
                      <Typography variant="h6" sx={{ color: 'white' }}>{project.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'white' }}>{project.description}</Typography>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </Box>
          ))}
        </Carousel>
        {/* Linha com gradiente */}
        <Box
          sx={{
            height: '2px',
            background: 'linear-gradient(to right, #1A2530, #9B7424)',
            margin: '20px auto 0',
            width: '80%',
          }}
        />
      </Container>
    </PortfolioBackground>
  );
};

export default PortfolioSection;
