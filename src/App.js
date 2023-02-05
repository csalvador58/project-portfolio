import React, {forwardRef, useRef} from 'react';
import './App.css';
import {
  createTheme,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import Hero from '../src/layout/Hero';
import NavBar from './layout/NavBar';


import HeroText from './layout/HeroText';
import Projects from './layout/Projects';
import Experience from './layout/Experience';
import Contacts from './layout/Contacts';
import RefMarker from './components/RefMarker';
// import Hero from './UI/Hero';
// import { dark } from '@mui/material/styles/createPalette';

const App = () => {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleProjectsClick = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleExperienceClick = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactClick = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

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
          <NavBar handleAboutClick={handleAboutClick} handleProjectsClick={handleProjectsClick} handleExperienceClick={handleExperienceClick} handleContactClick={handleContactClick}/>
        </Grid>
        <Grid item>
          <RefMarker reference={aboutRef}/>
          <Hero />
          <HeroText />
        </Grid>
        <Grid item>
        <RefMarker reference={projectsRef}/>
          <Projects />
        </Grid>
        <Grid item>
        <RefMarker reference={experienceRef}/>
          <Experience />
        </Grid>
        <Grid item>
        <RefMarker reference={contactRef}/>
          <Contacts />
        </Grid>
      </Grid>
      {/* <NavBar /> */}
    </ThemeProvider>
  );
}

export default App;
