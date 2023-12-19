// import the necessary modules from MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";

// define the navItems array
const navItems = ['Home', 'My books','Support', 'About'];

// define the Search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// define the SearchIconWrapper component
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// define the StyledInputBase component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '8ch',
      '&:focus': {
        width: '16ch',
      },
    },
  },
}));

// define the MenuBar component
// define the MenuBar component
function MenuBar(props) {
  // get the handleDrawerToggle function from props
  const { handleDrawerToggle } = props;

  // define the handleSignIn and handleSignUp functions
  // you can add your own logic here
  const handleSignIn = () => {
    console.log('Sign In');
  };

  const handleSignUp = () => {
    console.log('Sign Up');
  };

  return (
    <AppBar component="nav" sx={{ display: 'flex', order: 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: '#fff' }}>
              {item}
            </Button>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1, ml: 'auto', zIndex: 10 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignIn}
            sx={{ ml: 2, backgroundColor: '#fff', color: '#0573e8' }}
          >
            Sign In
          </Button>
          
        </Box>
        <Box sx={{ display: { xs: 'block', sm: 'block' } }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignIn}
            sx={{ ml: 2, backgroundColor: '#fff', color: '#0573e8' }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// export the MenuBar component
export default MenuBar;

