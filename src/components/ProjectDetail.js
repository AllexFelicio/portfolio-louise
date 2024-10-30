import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Dialog, DialogContent, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-material-ui-carousel';
import { House, Person, LocationOn} from '@mui/icons-material';

const projectDetails = {
  projectA: {
    title: 'Barn House',
    description: 'Detalhes da Barn House',
    size: '665',
    architect:'FELIPE DINIZ',
    location:'FAZENDA BOA VISTA - SP',
    completionDate:'',
    images: [
      'https://lampur.com.br/wp-content/smush-webp/2020/05/BARN-HOUSES-LAMPUR-engenharia-62-2.jpg.webp',
      'https://lampur.com.br/wp-content/smush-webp/2020/05/IMG_6932-1536x755.jpg.webp',
      'https://lampur.com.br/wp-content/smush-webp/2020/05/PHOTO-2022-06-29-15-22-40-2-1536x864.jpg.webp',
      'https://lampur.com.br/wp-content/smush-webp/2020/05/PHOTO-2022-06-29-15-22-41-1536x864.jpg.webp', // Adicione mais imagens conforme necessário
      'https://fazendaboavista.jhsf.com.br/public/uploads/811e22553bbbd8121b1d636168d237e3.webp',
    ],
  },
  projectB: {
    title: 'Garden House',
    description: 'Detalhes da garden house.',
    size: '818',
    architect:'FELIPE DINIZ',
    location:'FAZENDA BOA VISTA - SP',
    completionDate:'',
    images: [
      'https://lampur.com.br/wp-content/smush-webp/2021/02/IMG_2056.jpg.webp',
    ],
  },
  projectC: {
    title: 'Residencia',
    description: 'Detalhes residencia.',
    size: '665',
    architect:'',
    location:'Fazenda Da Grama - SP',
    completionDate:'',
    images: [
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
    ],
  },
  projectD: {
    title: 'Victor e Bridla',
    description: 'Detalhes',
    size: '665',
    architect:'',
    location:'Aldeia Da Serra - SP',
    completionDate:'',
    images: [
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
      'https://www.bidese.com.br/storage/app/uploads/public/61e/96d/76b/61e96d76ba8fe211400673.png',
    ],
  },
  projectE: {
    title: 'Reforma Jorge Y.',
    description: 'Detalhes',
    size: '665',
    architect:'',
    location:'FAZENDA BOA VISTA - SP',
    completionDate:'',
    images: [
      'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png',
      'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png',
      'https://bidese.com.br/storage/app/media/uploaded-files/gap01.png',
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center',color: 'white' }}>
          <House sx={{ marginRight: '10px', color: '#9B7424' }} />
          <Typography variant="h6">Metragem:</Typography>
          <Typography variant="h6" sx={{ marginLeft: '10px' }}>{project.size} m²</Typography>
        </Grid>
        
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <Person sx={{ marginRight: '10px', color: '#9B7424' }} />
          <Typography variant="h6">Arquiteto:</Typography>
          <Typography variant="body1" sx={{ marginLeft: '10px' }}>{project.architect}</Typography>
        </Grid>
        
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <LocationOn sx={{ marginRight: '10px', color: '#9B7424' }} />
          <Typography variant="h6">Local:</Typography>
          <Typography variant="body1" sx={{ marginLeft: '10px' }}>{project.location}</Typography>
        </Grid>
        
        {/* <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DateRange sx={{ marginRight: '10px', color: '#9B7424' }} />
          <Typography variant="h6">Data de Conclusão:</Typography>
          <Typography variant="body1" sx={{ marginLeft: '10px' }}>{project.completionDate}</Typography>
        </Grid> */}
      </Grid>
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
