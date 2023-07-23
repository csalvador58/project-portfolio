import { Avatar, Box, Grid, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ProfilePic from '../images/Salvador.jpg';

export default function Hero() {
  return (
    <>
      <Box mt='5rem' display='flex' justifyContent='center' padding={5}>
        <Avatar
          alt='Chris Salvador, MSF'
          src={ProfilePic}
          sx={{ width: { xs: '60vw' }, height: 'auto', maxWidth: '300px' }}
        />
      </Box>
      <Typography
        align='center'
        fontWeight='bold'
        paddingX={{ xs: '2rem', sm: '4rem' }}
        variant='h4'
        component='h1'
      >
        CHRIS SALVADOR
      </Typography>
      <Typography align='center' variant='h6' component='p'>
        Developer
      </Typography>

      <Grid container justifyContent='center' alignItems='center'>
        <LocationOnIcon fontSize='small' />
        <Typography alignItems='center'>Seattle, WA</Typography>
      </Grid>
    </>
  );
}