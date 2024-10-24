import React from 'react';
import { Container, Box, Typography, Grid, Avatar, Card, CardContent } from '@mui/material';
import { styled } from '@mui/system';

const TestimonialsBackground = styled(Box)({
  backgroundColor: '#111',
  padding: '50px 0',
  color: 'white',
});

const testimonials = [
  { name: 'John Doe', image: 'https://via.placeholder.com/100', text: 'Great work and professionalism.' },
  { name: 'Jane Smith', image: 'https://via.placeholder.com/100', text: 'Reliable and efficient!' },
];

const TestimonialsSection = () => {
  return (
    <TestimonialsBackground>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ backgroundColor: '#222', color: 'white' }}>
                <CardContent>
                  <Avatar src={testimonial.image} alt={testimonial.name} sx={{ width: 56, height: 56, mb: 2 }} />
                  <Typography variant="body1" gutterBottom>
                    {testimonial.text}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {testimonial.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </TestimonialsBackground>
  );
};

export default TestimonialsSection;
