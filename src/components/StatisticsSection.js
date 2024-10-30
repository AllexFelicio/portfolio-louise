import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StatisticsBackground = styled(Box)(() => ({
  backgroundColor: '#141C24',
  color: 'white',
  padding: '50px 0',
}));

const stats = [
  { number: '20+', label: 'Clientes' },
  // { number: '10', label: 'Projetos' },
  { number: '4', label: 'Anos de Experiencia' },
];

const StatisticsSection = () => {
  return (
    <>
    <Box
          sx={{
            height: '2px',
            background: 'linear-gradient(to left, #141C24, #9B7424)',
            marginTop: '0px',
            width: '100%',
          }}
        />
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
    </>
  );
};

export default StatisticsSection;
