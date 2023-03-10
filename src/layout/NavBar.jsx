import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({
  handleAboutClick,
  handleProjectsClick,
  handleExperienceClick,
  handleContactClick,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const menuId = 'primary-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleAboutClick}>About</MenuItem>
      <MenuItem onClick={handleProjectsClick}>Projects</MenuItem>
      <MenuItem onClick={handleExperienceClick}>Experience</MenuItem>
      <MenuItem onClick={handleContactClick}>Contact</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color='transparent'
        position='fixed'
        
        sx={{ backdropFilter: 'blur(10px)'}}
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
          {/* <IconButton
            aria-label='menu'
            color='inherit'
            edge='start'
            size='large'
            sx={{ mr: 2 }}
            id='menu-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton> */}
          <MenuIcon onClick={handleProfileMenuOpen} />
          {renderMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
