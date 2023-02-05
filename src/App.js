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
import NavBar from './layout/NavBar';
import ProfilePic from './images/Salvador.jpg';
import ProjectCard from './components/ProjectCard';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
      <Grid container direction='column' position='absolute' top='8rem'>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item>
          <Box display='flex' justifyContent='center'>
            <Avatar
              alt='Chris Salvador'
              src={ProfilePic}
              sx={{ width: 150, height: 150 }}
            />
          </Box>
          <Typography variant='h4' component='h1' fontWeight='bold' textAlign='center'>CHRIS SALVADOR</Typography>
          <Typography variant='h6' component='h6' textAlign='center'>Developer</Typography>

          <Grid container justifyContent='center' alignItems='center'>
            <LocationOnIcon fontSize='small' />
            <Typography alignItems='center'>Seattle, WA</Typography>
          </Grid>

          <Typography variant='h5' component='p' padding='4rem 2rem'>
            I'm a developer, a tech enthusiast, and inspired by Web3. I have
            high interests in Blockchain security and zero-knowledge proofs.
            Healthcare and Finance are the industries that I previously worked
            in and believe to have the greatest benefit to utilize Web3
            technology. I'm open to connect with anyone who is along the same
            dev journey or interests.
          </Typography>
        </Grid>
        <Grid item>
          <Paper elevation={0} sx={{ background: 'black' }} square>
            <Typography
              variant='h6'
              component='h6'
              color='white'
              align='center'
              padding='4rem 0'
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
        </Grid>
        <Grid item>
          <Typography
            variant='h6'
            component='h6'
            align='center'
            paddingTop='4rem'
          >
            EXPERIENCE
          </Typography>
          <Typography variant='h6' component='p' padding='2rem'>
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
              paddingTop='4rem'
            >
              CONTACT
            </Typography>
            <Typography
              variant='h6'
              component='p'
              color='white'
              padding='2rem'
              textAlign='center'
            >
              #KeepPushing #NeverStopLearning
            </Typography>
            <Grid container p={3} justifyContent='center' alignItems='center'>
              <IconButton
                href='https://www.linkedin.com/csalvador58'
                target='_blank'
              >
                <LinkedInIcon sx={{ color: 'white' }} fontSize='large' />
              </IconButton>
              <IconButton
                href='https://twitter.com/const_salvador'
                target='_blank'
              >
                <TwitterIcon sx={{ color: 'white' }} fontSize='large' />
              </IconButton>
              <IconButton href='https://github.com/csalvador58' target='_blank'>
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
