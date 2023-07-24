import { Grid, Paper, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import projects from '../projects/projects.json';
import { Project } from '../types/project';

export default function Projects() {
  const portfolioProjects = projects.map((project: Project) => {
    return (
      <Grid item key={project.id} xs={12} sm={6} md={4} lg={4} xl={3}>
        <ProjectCard
          image={project.image.src}
          imageAlt={project.image.alt}
          title={project.title}
          name={project.name}
          description={project.about}
          url={project.url}
        />
        <Typography
          variant='body2'
          component='div'
          color='white'
          align='center'
          paddingTop='1rem'
          paddingBottom='2rem'
        >
          {project.name}
        </Typography>
      </Grid>
    );
  });
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
      {/* <Typography
        color='white'
        fontWeight='light'
        variant='body1'
        component='p'
        pb='2rem'
        paddingX={{ xs: '2rem', sm: '4rem', md: '6rem', xl: '8rem' }}
      >
        Here I will showcase my projects as I progress through my dev journey.
      </Typography> */}
      <Grid container spacing={2} padding='0 2rem' columns={12}>
        {portfolioProjects}
        {/* <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
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
        </Grid> */}
      </Grid>
    </Paper>
  );
}