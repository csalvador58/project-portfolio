import * as React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import NavTabs from './NavTabs';

export default function NavBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' color="transparent" sx={{backdropFilter:"blur(20px)"}}>
        <Toolbar>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1, ml: 2 }}>
            CHRIS SALVADOR
          </Typography>
          <NavTabs />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
