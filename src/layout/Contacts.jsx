import React from 'react';
import { Grid, IconButton, Paper, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contacts() {
  return (
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
        #KeepPushing #NeverStopLearning<br/> 
        #TheRewardIsTheJourney
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
  );
}
