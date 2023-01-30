import './App.css';
import {
  Avatar,
  Box,
  createTheme,
  // CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
// import Header from './layout/Header';
import NavBar from './layout/NavBar';
import ProfilePic from './images/Salvador.jpg';
import ProjectCard from './components/ProjectCard';
// import Hero from './UI/Hero';
// import { dark } from '@mui/material/styles/createPalette';

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      // primary: {
      // main: '#030406'
      // },
      // secondary: {
      // main: '#f50057'
      // },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Grid container direction='column' position='absolute' top='65px'>
        <Grid item>
          <NavBar />
          {/* <Header /> */}
        </Grid>
        <Grid item>{/* <Hero /> */}</Grid>
        <Grid item>
          <Typography variant='h6' component='h6' align='center'>
            ABOUT
          </Typography>
          <Box display='flex' justifyContent='center'>
            <Avatar
              alt='Chris Salvador'
              src={ProfilePic}
              sx={{ width: 100, height: 100 }}
            />
          </Box>

          <Typography variant='h5' component='h2'>
            Quisque commodo facilisis tellus. Integer sodales lorem sed nisl.
            Morbi consectetuer mauris quis odio. Ut dolor lorem, viverra vitae,
            viverra eu, euismod nec, enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit.
          </Typography>
        </Grid>
        <Grid item>
          <Paper elevation={0} sx={{ background: 'black' }} square>
            <Typography
              variant='h6'
              component='h6'
              color='white'
              align='center'
            >
              PROJECTS
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <ProjectCard></ProjectCard>
                <Typography
                  variant='body2'
                  component='div'
                  color='white'
                  align='center'
                >
                  Project
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <ProjectCard></ProjectCard>
                <Typography
                  variant='body2'
                  component='div'
                  color='white'
                  align='center'
                >
                  Project
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <ProjectCard></ProjectCard>
                <Typography
                  variant='body2'
                  component='div'
                  color='white'
                  align='center'
                >
                  Project
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <ProjectCard></ProjectCard>
                <Typography
                  variant='body2'
                  component='div'
                  color='white'
                  align='center'
                >
                  Project
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Typography variant='h6' component='h6' align='center'>
            EXPERIENCE
          </Typography>
          <Typography variant='h6' component='body'>
            Quisque commodo facilisis tellus. Integer sodales lorem sed nisl.
            Morbi consectetuer mauris quis odio. Ut dolor lorem, viverra vitae,
            viverra eu, euismod nec, enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit.
          </Typography>
        </Grid>
        <Grid item>
          <Paper elevation={0} sx={{ background: 'black' }} square>
            <Typography
              variant='h6'
              component='h6'
              color='white'
              align='center'
            >
              CONTACT
            </Typography>
            <Typography variant='h6' component='body' color='white'>
              Quisque commodo facilisis tellus. Integer sodales lorem sed nisl.
              Morbi consectetuer mauris quis odio. Ut dolor lorem, viverra
              vitae, viverra eu, euismod nec, enim. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* <NavBar /> */}
    </ThemeProvider>
  );
}
