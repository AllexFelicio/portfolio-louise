import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StatisticsBackground = styled(Box)(() => ({
  backgroundColor: '#111',
  color: 'white',
  padding: '50px 0',
}));

const stats = [
  { number: '50+', label: 'Clientes' },
  { number: '68', label: 'Projetos' },
  { number: '6', label: 'Anos de Experiencia' },
];

const StatisticsSection = () => {
  return (
    <StatisticsBackground id="statistics">
      <Grid container justifyContent="center" spacing={4}>
        {stats.map((stat, index) => (
          <Grid item xs={6} md={3} key={index} textAlign="center">
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {stat.number}
            </Typography>
            <Typography variant="h6">{stat.label}</Typography>
          </Grid>
        ))}
      </Grid>
    </StatisticsBackground>
  );
};

export default StatisticsSection;
