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
       In June 2023, I recently completed my
        Javascript Full-Stack developer certificate from{' '}
        <a href='https://www.pce.uw.edu/' target='_blank'>
          University of Washington - PCE
        </a>
        .  Throughout my 15+ years of working experience, I was fortunate to make
        contributions in diverse industries, including Healthcare, FinTech, and
        Consumer Media measurement. In addition to my work experience, I hold
        both a M.S. in Finance and a B.S. Electronic Engineering Tech degrees,
        reflecting my passion for continuos learning.
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
            sx={{
              textAlign: 'center',
            }}
            // align='center'
            primary='Field Service Engineer - Medical Imaging Systems'
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
            sx={{
              textAlign: 'center',
            }}
            // align='center'
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
            sx={{
              textAlign: 'center',
            }}
            // align='center'
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
