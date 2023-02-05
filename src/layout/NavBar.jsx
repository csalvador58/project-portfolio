import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='transparent'
        position='fixed'
        sx={{ backdropFilter: 'blur(10px)' }}
      >
        <Toolbar>
          <Typography
            paddingLeft={2}
            variant='h8'
            component='div'
            sx={{ flexGrow: 1 }}
          >
            SALVADOR
          </Typography>
          <IconButton
            aria-label='menu'
            color='inherit'
            edge='start'
            size='large'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
