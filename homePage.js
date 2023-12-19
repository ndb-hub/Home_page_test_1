// import the necessary modules from MUI
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// import the MenuBar component
import MenuBar from './Home_Page_functions/MenuBar';

// define the HomePage component
function HomePage(props) {
  // get the theme from MUI
  const theme = useTheme();

  // use the useMediaQuery hook to check the screen size
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // get the handleDrawerToggle function from props
  const { handleDrawerToggle } = props;

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12}>
        <MenuBar handleDrawerToggle={handleDrawerToggle} />
      </Grid>
    </Grid>
  );
}

// export the HomePage component
export default HomePage;
