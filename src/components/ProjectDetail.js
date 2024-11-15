import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Dialog, DialogContent, Grid } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-material-ui-carousel';
import { House, Person, LocationOn} from '@mui/icons-material';

const projectDetails = {
  projectA: {
    title: 'Barn House',
    description: 'Inspiradas nas casas de campo inglesas, com seus celeiros e rusticidade, fazendo o uso de materiais como tijolinho, pedra e madeira, as Barn Houses assumem contornos únicos proporcionados por grandes vãos e janelas. Pude participar da execução do projeto da 1ª fase com 16 Barns, 2ª fase com 9 e 1 Barn House individual personalizada, totalizando acompanhamento da construção de 26 Barn House.',
    size: '665',
    architect:'FELIPE DINIZ',
    location:'FAZENDA BOA VISTA - SP',
    completionDate:'',
    images: [
      'https://lampur.com.br/wp-content/smush-webp/2020/05/BARN-HOUSES-LAMPUR-engenharia-62-2.jpg.webp',
      'https://lampur.com.br/wp-content/smush-webp/2020/05/IMG_6932-1536x755.jpg.webp',
      'https://lampur.com.br/wp-content/smush-webp/2020/05/PHOTO-2022-06-29-15-22-40-2-1536x864.jpg.webp',
      'https://lampur.com.br/wp-content/smush-webp/2020/05/PHOTO-2022-06-29-15-22-41-1536x864.jpg.webp', 
      'https://i.ibb.co/9Z3t5w4/Whats-App-Image-2024-11-12-at-11-45-00.jpg',
      'https://i.ibb.co/D8CJQwS/Whats-App-Image-2024-11-12-at-11-45-00-1.jpg',
      'https://i.ibb.co/rGZByNN/Whats-App-Image-2024-11-12-at-11-45-00-2.jpg',
      'https://i.ibb.co/QFG2NKw/Whats-App-Image-2024-11-12-at-11-45-00-3.jpg',
      'https://i.ibb.co/xLj7CSr/Whats-App-Image-2024-11-12-at-11-45-00-4.jpg',
      'https://i.ibb.co/F6ZnTvh/Whats-App-Image-2024-11-12-at-11-45-00-5.jpg',
    ],
  },
  projectB: {
    title: 'Garden House',
    description: 'Inspiradas nas casas de campo da Europa e rodeadas pela natureza, as Garden House foram construídas com materiais predominantes a madeira e pedras. Pude participar da execução do projeto de 17 Garden House.',
    size: '818',
    architect:'FELIPE DINIZ',
    location:'FAZENDA BOA VISTA - SP',
    completionDate:'',
    images: [
      'https://lampur.com.br/wp-content/smush-webp/2021/02/IMG_2056.jpg.webp',
      'https://i.ibb.co/mGGFpKv/garden-img-20181207-wa0011db3abc3a13993605c3a7e7fba9168e9a.jpg',
      'https://i.ibb.co/4dFtN06/img-20181029-wa00128f16a4030fedf7792e6e7aad5a677880.jpg',
      'https://i.ibb.co/rFy08v9/img-20181029-wa001126e12c0bed4be9f75ed7b71fd0465ad5.jpg',
    ],
  },
  projectC: {
    title: 'Residência A & M',
    description: 'A execução desse projeto foi realizada em 18 meses. É uma casa com 6 suítes, vasta área gourmet dentro de um condomínio de tirar o fôlego com uma linda paisagem e diversas atividades. As esquadrias de alumínio na cor azul embelezam ainda mais o cenário.',
    size: '942,65',
    architect:'',
    location:'Fazenda Da Grama - SP',
    completionDate:'',
    images: [
      'https://i.ibb.co/7t0Smxn/27.jpg',
      'https://i.ibb.co/LppDbtc/52.jpg',
      'https://i.ibb.co/Vp7MBnh/70.jpg',
      'https://i.ibb.co/Rpyfp6H/61.jpg',
      'https://i.ibb.co/dJBggM6/73.jpg',
      'https://i.ibb.co/W0Kp2Hq/76.jpg',
      'https://i.ibb.co/vssBJ6N/80.jpg',
      'https://i.ibb.co/9NPbMD6/88.jpg',
      'https://i.ibb.co/nCD0zgm/91.jpg',
      'https://i.ibb.co/6029d1Z/82.jpg',
    ],
  },
  projectD: {
    title: 'Residência V & B',
    description: 'Projeto voltado à uma família de um casal com dois filhos. A casa está em execução e é composta pelas suítes, vasta área gourmet, salão de jogos e o que chama mais atenção: um balanço de aproximadamente 6 metros.',
    size: '551,51',
    architect:'',
    location:'Aldeia Da Serra - SP',
    completionDate:'',
    images: [
      'https://i.ibb.co/DRbF19P/Whats-App-Image-2024-11-12-at-14-33-48.jpg',
      'https://i.ibb.co/nwTvPN2/Whats-App-Image-2024-11-12-at-14-34-28.jpg',
      'https://i.ibb.co/0XSmdCw/Whats-App-Image-2024-11-12-at-14-33-17.jpg',
      'https://i.ibb.co/KsGvgJ1/Whats-App-Image-2024-11-12-at-14-37-37.jpg',
    ],
  },
  projectE: {
    title: 'Reforma Casa Golf Course',
    description: 'Participei da reforma dessa casa de veraneio localizada no interior de São Paulo. Realizamos  manutenções nas pinturas, elétrica e hidráulica. Além da troca do piso e revestimento do deck da piscina, piso interno, trocas das iluminações e a pedido do cliente retiramos a borda infinita da piscina, deixando-a com borda reta. A manutenção residencial é essencial para garantir a segurança, conforto e durabilidade do imóvel.',
    size: '1.127,45',
    architect:'Studio Arthur Casas',
    location:'FAZENDA BOA VISTA - SP',
    completionDate:'',
    images: [
      'https://i.ibb.co/gtYXVpG/fachada.jpg',
      'https://i.ibb.co/YpP524V/1.jpg',
      'https://i.ibb.co/34hSWgS/2.jpg',
      'https://i.ibb.co/KwgBctF/3.jpg',
      'https://i.ibb.co/zZRkwC8/4.jpg',
      'https://i.ibb.co/1rjKBL4/5.jpg',
      'https://i.ibb.co/cJWKW2p/6.jpg',
      'https://i.ibb.co/6YtmHQh/7.jpg',
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
        onClick={() => navigate(-1)} 
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
        
        {project.architect && project.architect.trim() !== "" && (
          <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <Person sx={{ marginRight: '10px', color: '#9B7424' }} />
            <Typography variant="h6">Arquiteto:</Typography>
            <Typography variant="body1" sx={{ marginLeft: '10px' }}>
              {project.architect}
            </Typography>
          </Grid>
        )}
        
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
