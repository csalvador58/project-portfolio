import { useRef } from 'react';
import './App.css';
import { Grid, ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Hero from './layout/Hero';
import NavBar from './layout/NavBar';
import HeroText from './layout/HeroText';
import Experience from './layout/Experience';
import Contacts from './layout/Contacts';
import RefMarker from './components/RefMarker';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  const aboutRef = useRef<HTMLSpanElement>(null);
  const experienceRef = useRef<HTMLSpanElement>(null);
  const contactRef = useRef<HTMLSpanElement>(null);

  const handleAboutClick = () => {
    const offset = aboutRef.current?.offsetTop;
    if (offset !== undefined) {
      window.scroll({ top: offset, left: 0, behavior: 'smooth' });
    }
  };
  const handleExperienceClick = () => {
    const offset = experienceRef.current?.offsetTop;
    // console.log(offset)
    window.scroll({ top: (offset ?? 0) - 15, left: 0, behavior: 'smooth' });
  };
  const handleContactClick = () => {
    const offset = contactRef.current?.offsetTop;
    window.scroll({ top: offset, left: 0, behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Grid container direction='column'>
          <Grid item>
            <NavBar
              handleAboutClick={handleAboutClick}
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
            <RefMarker reference={experienceRef} />
            <Experience />
          </Grid>
          <Grid item>
            <RefMarker reference={contactRef} />
            <Contacts />
          </Grid>
        </Grid>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
