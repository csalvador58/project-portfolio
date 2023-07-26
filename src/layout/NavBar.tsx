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
  handleExperienceClick: () => void;
  handleContactClick: () => void;
}

const Navbar: FC<NavBarProps> = ({
  handleAboutClick,
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

  const onClickHandler = (cb: () => void) => {
    setAnchorEl(null);
    cb();
  }

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
      <MenuItem onClick={() => onClickHandler(handleAboutClick)}>About</MenuItem>
      <MenuItem onClick={() => onClickHandler(handleExperienceClick)}>Experience</MenuItem>
      <MenuItem onClick={() => onClickHandler(handleContactClick)}>Contact</MenuItem>
    </Menu>
  );

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
            component='div'
            sx={{
              flexGrow: 1,
              fontSize: '1.5rem', // Custom font size for "h8"
              fontWeight: 'bold', // Custom font weight for "h8"
              marginLeft: '12px',
            }}
          >
            SALVADOR
          </Typography>
          <MenuIcon onClick={handleProfileMenuOpen} />
          {renderMenu}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
