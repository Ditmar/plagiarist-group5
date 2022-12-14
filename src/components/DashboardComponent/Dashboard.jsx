
import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems,workListItems
 ,reviewListItems, toListItems,postListItems,reportsListItems} from './listItems';
import Header from '../Header';
import useStyles from '../Header/header.styles';



import { Avatar, Button } from "@mui/material"
import logo from '../../assets/ImageD/logoo.png'
import useStyle from './SidebarStyle'
import Hidden from '@mui/material/Hidden';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


const DashboardContent = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const classes = useStyles();
  const classe = useStyle(); 

  return (
    <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}>
          <Toolbar className={ classes.toolBar }
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon className={classe.menunIcon} />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="#252733"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <Header />
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
        <Drawer className={classe.drawer} variant="permanent" open={open}>
          <Toolbar style={{background:'#363740',margin:'0px'}}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
            <Button>
              <Box  
                component='div'
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center'
                }}
              >
                <Avatar className={classe.avatar} alt="logo" src={logo} />
                <Typography sx={{
                  color: '#A4A6B3',
                  fontWeight: '700',
                  fontFamily: ['Mulish', 'sans-serif'].join(),
                }} variant="h6"
                style={{marginLeft:'10px', textTransform:'none'}}
                >Plagio Control
                </Typography>
              </Box>
            </Button>
            </IconButton>
          </Toolbar>
          <Divider />
          <List className={classe.nav} component="nav">
            <p className={classe.hover}>{mainListItems}</p>
            <p className={classe.hover}>{workListItems}</p>
            <p className={classe.hover}>{reviewListItems}</p>
            <p className={classe.hover}>{toListItems}</p>
            <p className={classe.hover}>{postListItems}</p>
            <p className={classe.hover}>{reportsListItems}</p>
            <Divider className={classe.divider} sx={{ my: 1 }} />
            <p className={classe.hover}>{secondaryListItems}</p>
          </List>
        </Drawer>
      </Hidden>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {children}
          </Container>
        </Box>
        
      </Box>
  );
}

export default DashboardContent;
