import { useRef } from 'react';
import './App.css';
import {
  createTheme,
  Grid,
  ThemeProvider,
} from '@mui/material';
import Hero from './layout/Hero';
import NavBar from './layout/NavBar';
import HeroText from './layout/HeroText';
import Projects from './layout/Projects';
import Experience from './layout/Experience';
import Contacts from './layout/Contacts';
import RefMarker from './components/RefMarker';

interface initOffsetTop {
  offsetTop: number,
}

const App = () => {
  const aboutRef = useRef<initOffsetTop>({offsetTop: 0});
  const projectsRef = useRef<initOffsetTop>({offsetTop: 0});
  const experienceRef = useRef<initOffsetTop>({offsetTop: 0});
  const contactRef = useRef<initOffsetTop>({offsetTop: 0});

  const handleAboutClick = () => {
    const offset = aboutRef.current.offsetTop;
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
  };
  const handleProjectsClick = () => {
    const offset = projectsRef.current.offsetTop;
    window.scroll({ top: offset-25, left: 0, behavior: 'smooth' });
  };
  const handleExperienceClick = () => {
    const offset = experienceRef.current.offsetTop;
    // console.log(offset)
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
  };
  const handleContactClick = () => {
    const offset = contactRef.current.offsetTop;
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
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
      <Grid container direction='column'>
        <Grid item>
          <NavBar
            handleAboutClick={handleAboutClick}
            handleProjectsClick={handleProjectsClick}
            handleExperienceClick={handleExperienceClick}
            handleContactClick={handleContactClick}
          />
        </Grid>
        <Grid item>
          <RefMarker reference={aboutRef} />
          <Hero />
          <HeroText />
        </Grid>
        <Grid item>
          <RefMarker reference={projectsRef} />
          <Projects />
        </Grid>
        <Grid item>
          <RefMarker reference={experienceRef} />
          <Experience />
        </Grid>
        <Grid item>
          <RefMarker reference={contactRef} />
          <Contacts />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;