import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Adicione esta linha
import useMediaQuery from '@mui/material/useMediaQuery';

const PortfolioBackground = styled(Box)(() => ({
  backgroundColor: '#222',
  padding: '50px 0',
  color: 'white',
}));

const projects = [
  { id: 'projectA', title: 'Project A', image: 'https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg', description: 'Building Design' },
  { id: 'projectB', title: 'Project B', image: 'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png', description: 'Bridge Construction' },
  { id: 'projectC', title: 'Project C', image: 'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png', description: 'Stadium Renovation' },
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
              backgroundColor: '#FF5722',
              color: 'white',
            },
          }}
          autoPlay={false}
        >
          {Array.from({ length: Math.ceil(projects.length / (isSmallScreen ? 1 : 3)) }).map((_, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              {projects.slice(index * (isSmallScreen ? 1 : 3), index * (isSmallScreen ? 1 : 3) + (isSmallScreen ? 1 : 3)).map((project, i) => (
                <Link key={i} to={`/projects/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* Link para a página de detalhes */}
                  <Card sx={{ backgroundColor: '#111', margin: '10px', display: 'flex', flexDirection: 'column', flex: 1 }}>
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
      </Container>
    </PortfolioBackground>
  );
};

export default PortfolioSection;
