import './App.css';
import {
  Avatar,
  Box,
  createTheme,
  // CssBaseline,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
// import Header from './layout/Header';
import Hero from '../src/layout/Hero';
import NavBar from './layout/NavBar';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

import HeroText from './layout/HeroText';
import Projects from './layout/Projects';
import Experience from './layout/Experience';
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
      <Grid container direction='column' position='absolute' top='4rem'>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item>
          <Hero />
          <HeroText />
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
        <Grid item>
          <Experience />
        </Grid>

        <Grid item>
          <Paper elevation={0} sx={{ background: 'black' }} square>
            <Typography
              variant='h6'
              component='h6'
              color='white'
              align='center'
              padding='3rem 0'
            >
              CONTACT
            </Typography>
            <Typography
              variant='h6'
              component='p'
              color='white'
              padding='0 2rem'
              align='center'
            >
              #KeepPushing #NeverStopLearning
            </Typography>
            <Grid container p={3} justifyContent='center' alignItems='center'>
              <IconButton
                aria-label='LinkedIn'
                href='https://www.linkedin.com/csalvador58'
                target='_blank'
              >
                <LinkedInIcon sx={{ color: 'white' }} fontSize='large' />
              </IconButton>
              <IconButton
                aria-label='Twitter'
                href='https://twitter.com/const_salvador'
                target='_blank'
              >
                <TwitterIcon sx={{ color: 'white' }} fontSize='large' />
              </IconButton>
              <IconButton
                aria-label='GitHub'
                href='https://github.com/csalvador58'
                target='_blank'
              >
                <GitHubIcon sx={{ color: 'white' }} fontSize='large' />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      {/* <NavBar /> */}
    </ThemeProvider>
  );
}
