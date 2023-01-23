import './App.css';
import {
  createTheme,
  CssBaseline,
  Grid,
  Paper,
  ThemeProvider,
} from '@mui/material';
import Header from './layout/Header';
import NavBar from './layout/NavBar';
import Hero from './UI/Hero';
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
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Hero />
        </Grid>
        <Grid item>About</Grid>
        <Grid item>Experience</Grid>
        <Grid item>Projects</Grid>
        <Grid item>Contact</Grid>
      </Grid>
      {/* <NavBar /> */}
    </ThemeProvider>
  );
}
