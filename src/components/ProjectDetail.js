import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Dialog, DialogContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-material-ui-carousel';

const projectDetails = {
  projectA: {
    title: 'Project A',
    description: 'Detailed description of Project A.',
    images: [
      'https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg',
      'https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg',
      'https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg', // Adicione mais imagens conforme necessário
    ],
  },
  projectB: {
    title: 'Project B',
    description: 'Detailed description of Project B.',
    images: [
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ],
  },
  projectC: {
    title: 'Project C',
    description: 'Detailed description of Project C.',
    images: [
      'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams(); // Obtém o ID do projeto da URL
  const project = projectDetails[projectId]; // Obtém os detalhes do projeto
  const navigate = useNavigate(); // Hook para navegação
  const [open, setOpen] = useState(false); // Estado do modal
  const [selectedImage, setSelectedImage] = useState(''); // Imagem selecionada

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!project) {
    return <Typography variant="h5">Projeto não encontrado</Typography>;
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Button 
        onClick={() => navigate(-1)} // Volta para a tela anterior
        variant="contained"
        sx={{ backgroundColor: '#9B7424', marginBottom: '20px' }}
      >
        Voltar
      </Button>
      <Typography variant="h4" sx={{ color: 'white' }}>{project.title}</Typography>
      <Typography variant="body1" sx={{ margin: '20px 0', color: 'white' }}>
        {project.description}
      </Typography>
      <Carousel
        navButtonsAlwaysVisible
        indicators
        animation="slide"
        timeout={500}
        sx={{ padding: '20px' }}
        navButtonsProps={{
          style: {
            backgroundColor: '#9B7424',
            color: 'white',
          },
        }}
        autoPlay={false} // Desativa autoplay para melhor controle
      >
        {project.images.map((image, index) => (
          <Box key={index} display="flex" justifyContent="center">
            <CardMedia 
              component="img" 
              height="300" 
              image={image} 
              alt={project.title} 
              sx={{ maxHeight: '300px', width: '100%', objectFit: 'contain', cursor: 'pointer' }} // Mantém a imagem sem cortar
              onClick={() => handleImageClick(image)} // Chama a função de clique
            />
          </Box>
        ))}
      </Carousel>

      {/* Modal para imagem ampliada */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img 
            src={selectedImage} 
            alt="Imagem ampliada" 
            style={{ width: '100%', height: 'auto' }} // Ajusta a imagem
          />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default ProjectDetail;
