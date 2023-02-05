import React from 'react';
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

export default function Experience() {
  return (
    <>
      <Typography
        variant='h6'
        component='h6'
        align='center'
        padding='3rem 0'
      >
        EXPERIENCE
      </Typography>
      <Typography fontWeight='light' variant='h6' component='p' paddingX={{ xs: '2rem', sm: '4rem'}}>
        I've been fortunate to work at several global companies each a leader in its respective technology sector - Healthcare, FinTech, and Consumer audience measurement. 
      </Typography>
      <List sx={{padding: '3rem'}}>
        <ListItem alignItems='flex-start'>
          <ListItemText
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
        <ListItem alignItems='flex-start'>
          <ListItemText
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
        <ListItem alignItems='flex-start'>
          <ListItemText
            primary='Quality Analyst'
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
    </>
  );
}
