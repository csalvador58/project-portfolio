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
      <Grid container spacing={1} padding='0 2rem'>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
        <Grid item xs={12}>
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
