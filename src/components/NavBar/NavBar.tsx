import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
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
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <img src="/logo.png" width="16" alt="Movie Discover" />
          </div>
          <Link href="/" variant="h6" className={classes.title} color="inherit" underline="none">
            MovieDiscover
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
