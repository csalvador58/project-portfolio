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
        fontSize={{ xs: '1rem', sm: '1.2rem', md: '1.5rem' }}
        component='p'
        pb='2rem'
        paddingX={{ xs: '2rem', sm: '4rem', md: '6rem', xl: '8rem' }}
      >
        Throughout my 15+ years of professional experience, I was fortunate to
        work in a diverse set industries including Healthcare, FinTech, and
        Consumer Media research. In addition to my work experience, I hold
        both a M.S. in Finance and a B.S. in Electronic Engineering Tech degrees.
      </Typography>
      <List
        sx={{
          marginX: 'auto',
          // maxWidth: '75vw',
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
            primary={
              <Box
                display='flex'
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent='center'
                alignItems='center'
                sx={{ '& :not(:last-child)': { mr: { xs: 0, md: 1 } } }}
              >
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  component='p'
                  fontSize={{ xs: '1rem' }}
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Field Service Engineer II,
                </Typography>
                <Typography
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  component='p'
                  fontSize={{ xs: '1rem' }}
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Medical Imaging Systems
                </Typography>
              </Box>
            }
            secondary={
              <React.Fragment>
                <Typography
                  // sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  GE HealthCare
                </Typography>{' '}
                <Link href='https://www.gehealthcare.com/' target='_blank'>
                  {' '}
                  www.gehealthcare.com
                </Link>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider
          sx={{ maxWidth: { xs: '15rem', md: '20rem' }, marginX: 'auto' }}
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
            primary={
              <Box
                display='flex'
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent='center'
                alignItems='center'
                sx={{ '& :not(:last-child)': { mr: { xs: 0, md: 1 } } }}
              >
                <Typography
                  component='p'
                  fontSize={{ xs: '1rem' }}
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Sr Fund Accountant,
                </Typography>
                <Typography
                  component='p'
                  fontSize={{ xs: '1rem' }}
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Hedge Funds
                </Typography>
              </Box>
            }
            secondary={
              <React.Fragment>
                <Typography
                  // sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  SS&C ALPS
                </Typography>{' '}
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
          sx={{ maxWidth: { xs: '15rem', md: '20rem' }, marginX: 'auto' }}
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
            primary={
              <Box
                display='flex'
                flexDirection={{ xs: 'column', md: 'row' }}
                justifyContent='center'
                alignItems='center'
                sx={{ '& :not(:last-child)': { mr: { xs: 0, md: 1 } } }}
              >
                <Typography
                  component='p'
                  fontSize={{ xs: '1rem' }}
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Quality Analyst,
                </Typography>
                <Typography
                  component='p'
                  fontSize={{ xs: '1rem' }}
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Field Operations
                </Typography>
              </Box>
            }
            secondary={
              <React.Fragment>
                <Typography
                  // sx={{ display: 'inline' }}
                  component='span'
                  variant='body2'
                  color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                >
                  Nielsen
                </Typography>{' '}
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
