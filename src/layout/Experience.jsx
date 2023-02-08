import React from 'react';
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

export default function Experience() {
  return (
    <Box textAlign={{ xl: 'center' }}>
      <Typography variant='h6' component='h6' align='center' padding='3rem 0'>
        EXPERIENCE
      </Typography>
      <Typography
        fontWeight='light'
        variant='body1'
        component='p'
        pb='2rem'
        paddingX={{ xs: '2rem', sm: '4rem', md: '6rem', xl: '8rem' }}
      >
        In 2022, I decided to a pursue a passion that I've long kept inside since programming 68HC11 micro-controllers in C over a decade ago.  My passion to develop software allows me to express my creativity and allow my curiosity to wander while building fun applications. I've taken the self-taught learning path and joined many Web2 and Web3 communities. I'm also enrolled at a Javascript Full-stack developer program locally in my area.<br/><br/> 
        
        In the 15+ years of my working career, I was fortunate to contribute in various industries that included Healthcare, FinTech, and Media measurement.  As a lifelong learner, my trainings also include a M.S. Finance and a B.S. Electronic Engineering Tech degrees.
      </Typography>
      <List
        sx={{
          marginX: 'auto',
          maxWidth: '480px',
          pb: '3rem',
          paddingX: { xs: '3rem', sm: '5rem', md: '7rem', xl: '10rem' },
        }}
      >
        <ListItem>
          <ListItemText
            align='center'
            primary='Field Engineer II - Medical Imaging Systems'
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  GE HealthCare —
                </Typography>
                <Link href='https://www.gehealthcare.com/' target='_blank'>
                  {' '}
                  www.gehealthcare.com
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='middle' component='li' />
        <ListItem>
          <ListItemText
            align='center'
            primary='Sr Fund Accountant - Hedge Funds'
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  SS&C ALPS —
                </Typography>
                <Link
                  href='https://www.ssctech.com/solutions/products-a-to-z/registered-fund-services'
                  target='_blank'
                >
                  {' '}
                  www.ssctech.com
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant='middle' component='li' />
        <ListItem>
          <ListItemText
            align='center'
            primary='Quality Analyst - Field Operations'
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color='text.primary'
                >
                  Nielsen —
                </Typography>
                <Link href='https://www.nielsen.com/' target='_blank'>
                  {' '}
                  www.nielsen.com
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
