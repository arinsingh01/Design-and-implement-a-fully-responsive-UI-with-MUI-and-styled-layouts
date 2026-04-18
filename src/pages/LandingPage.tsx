import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4">Title 1</Typography>
          <Typography variant="body1">Description for section 1.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4">Title 2</Typography>
          <Typography variant="body1">Description for section 2.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4">Title 3</Typography>
          <Typography variant="body1">Description for section 3.</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;