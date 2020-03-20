import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Theme, fade, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Link,
  InputBase,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import VideocamIcon from '@material-ui/icons/Videocam';

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
}

const sidebarWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 160,
      '&:focus': {
        width: 240,
      },
    },
  },
  drawerPaper: {
    width: sidebarWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

function Logo() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.logo}>
        <img src="/logo.png" width="16" alt="Movie Discover" />
      </div>
      <Link component={ReactLink} to="/" variant="h6" className={classes.title} color="inherit" underline="none">
        MovieDiscover
      </Link>
    </>
  );
}

function Sidebar(props: SidebarProps) {
  const { open, onClose } = props;
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={open}
      onClose={onClose}
      transitionDuration={{ enter: 250, exit: 250 }}
    >
      <div className={classes.toolbar} onClick={onClose}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={onClose}>
            <MenuIcon />
          </IconButton>
          <Logo />
        </Toolbar>
      </div>
      <Divider />
      <div onClick={onClose}>
        <List>
          <Link component={ReactLink} to="/" color="textSecondary" underline="none">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link component={ReactLink} to="/movie/nowPlaying" color="textSecondary" underline="none">
            <ListItem button>
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary="In Theaters" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
}

export default function NavBar() {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={openSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebar} onClose={closeSidebar} />
    </div>
  );
}
