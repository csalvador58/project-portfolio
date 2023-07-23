import { FC, MouseEvent, useState } from 'react';
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavBarProps {
  handleAboutClick: () => void;
  handleProjectsClick: () => void;
  handleExperienceClick: () => void;
  handleContactClick: () => void;
}

const Navbar: FC<NavBarProps> = ({
  handleAboutClick,
  handleProjectsClick,
  handleExperienceClick,
  handleContactClick,
}) => {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: MouseEvent<SVGSVGElement>) => {
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
            // variant='h8'
            component='div'
            sx={{ 
              flexGrow: 1,
              fontSize: "2rem", // Custom font size for "h8"
              fontWeight: "bold", // Custom font weight for "h8" 
            }}
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