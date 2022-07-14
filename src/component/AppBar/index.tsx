import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { 
  Link as RouterLink,
 } from 'react-router-dom';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';
import { NavPageConfig } from '../../domain/interface/common';


const AppBarComponent = ({ content = [], name = 'Roy Chuang' }: ICompoenetBaseProps<NavPageConfig[]>) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const mainStyle = {
    fontFamily: 'Arial,Helvetica,sans-serif',
    letterSpacing: '.1rem',
    bgcolor: "#FBFCFC",
    color: "#7B7D7D",
    boxShadow: 0,
  };

  return (
    <AppBar position="static" color="primary" sx={{ bgcolor: mainStyle.bgcolor, color: mainStyle.color, boxShadow: mainStyle.boxShadow }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: mainStyle.bgcolor,
              fontWeight: 700,
              letterSpacing: mainStyle.letterSpacing,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            { name }
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {content.map(({key, name, path}) => (
                <MenuItem 
                  key={key}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={path}
                >
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: mainStyle.fontFamily,
              fontWeight: 700,
              letterSpacing: mainStyle.letterSpacing,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            { name }
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {content.map(({key, name, path}) => (
              <Button
                key={key}
                onClick={() => {
                  handleCloseNavMenu();
                }}
                component={RouterLink}
                to={path}
                sx={{ my: 2, color: mainStyle.color, display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComponent;
