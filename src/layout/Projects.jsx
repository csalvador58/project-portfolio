import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <Paper elevation={0} sx={{ background: 'black' }} square>
      <Typography
        variant='h6'
        component='h6'
        color='white'
        align='center'
        padding='3rem 0'
      >
        PROJECTS
      </Typography>
      <Grid container spacing={2} padding='0 2rem' columns={12}>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard></ProjectCard>
          <Typography
            variant='body2'
            component='div'
            color='white'
            align='center'
            paddingTop='1rem'
            paddingBottom='2rem'
          >
            Project
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard></ProjectCard>
          <Typography
            variant='body2'
            component='div'
            color='white'
            align='center'
            paddingTop='1rem'
            paddingBottom='2rem'
          >
            Project
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard></ProjectCard>
          <Typography
            variant='body2'
            component='div'
            color='white'
            align='center'
            paddingTop='1rem'
            paddingBottom='2rem'
          >
            Project
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
          <ProjectCard></ProjectCard>
          <Typography
            variant='body2'
            component='div'
            color='white'
            align='center'
            paddingTop='1rem'
            paddingBottom='2rem'
          >
            Project
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
