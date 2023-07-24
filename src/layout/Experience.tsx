import React from 'react';
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
  // useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Experience() {
  // const userTheme = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();
  return (
    <Box textAlign={{ xl: 'center' }}>
      <Typography variant='h6' component='h6' align='center' padding='3rem 0'>
        EXPERIENCE
      </Typography>
      <Typography
        fontWeight='light'
        fontSize={{xs: '1rem', sm: '1.2rem', md: '1.5rem'}}
        component='p'
        pb='2rem'
        paddingX={{ xs: '2rem', sm: '4rem', md: '6rem', xl: '8rem' }}
      >
        Throughout my 15+ years of professional experience, I was fortunate to
        work in a diverse set industries including Healthcare, FinTech, and
        Consumer Media measurement. In addition to my work experience, I hold
        both a M.S. in Finance and a B.S. Electronic Engineering Tech degrees.
      </Typography>
      <List
        sx={{
          marginX: 'auto',
          maxWidth: '75vw',
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
            primary={`Field Service Engineer II • Medical Imaging Systems`}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color={'black'}
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
        <Divider
          // sx={{maxWidth: { sm: '20rem', md: '20rem' }}}
          variant='middle'
          component='li'
          style={{
            backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
          }}
        />
        <ListItem>
          <ListItemText
            sx={{
              textAlign: 'center',
            }}
            // align='center'
            primary='Sr Fund Accountant • Hedge Funds'
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
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
        <Divider
          // sx={{maxWidth: { xs: '3rem', sm: '5rem', md: '7rem' }}}
          variant='middle'
          component='li'
          style={{
            backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'black',
          }}
        />
        <ListItem>
          <ListItemText
            sx={{
              textAlign: 'center',
            }}
            // align='center'
            primary='Quality Analyst • Field Operations'
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
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
