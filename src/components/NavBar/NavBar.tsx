import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
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
import TheatersIcon from '@material-ui/icons/Theaters';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import * as utils from '../../CommonUtils';

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
      width: 300,
      '&:focus': {
        width: 420,
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
      <Link component={ReactLink} to="/" variant="h6" className={classes.title} color="textPrimary" underline="none">
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
                <TheatersIcon />
              </ListItemIcon>
              <ListItemText primary="In Theaters" />
            </ListItem>
          </Link>
          <Link component={ReactLink} to="/movie/upcoming" color="textSecondary" underline="none">
            <ListItem button>
              <ListItemIcon>
                <WatchLaterIcon />
              </ListItemIcon>
              <ListItemText primary="Coming Soon" />
            </ListItem>
          </Link>
          <Link component={ReactLink} to="/movie/popular" color="textSecondary" underline="none">
            <ListItem button>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary="Popular Movies" />
            </ListItem>
          </Link>
          <Link component={ReactLink} to="/movie/topRated" color="textSecondary" underline="none">
            <ListItem button>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Top Rated" />
            </ListItem>
          </Link>
        </List>
      </div>
    </Drawer>
  );
}

function NavBar(props: RouteComponentProps) {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const [searchText, setSearchText] = useState('');
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  const doSearch = (event: any) => {
    event.preventDefault();
    if (searchText.trim() !== '') {
      props.history.push(utils.getSearchMoviePath(searchText.trim()));
      window.scrollTo(0, 0);
      setSearchText('');
    }
  };
  return (
    <div>
      <AppBar position="fixed" color="default">
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
            <form onSubmit={doSearch}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchText}
                onChange={(event: any) => setSearchText(event.target.value)}
              />
            </form>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbar} />
      <Sidebar open={sidebar} onClose={closeSidebar} />
    </div>
  );
}

export default withRouter(NavBar);
