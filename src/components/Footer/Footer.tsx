import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      top: 'auto',
      bottom: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <img src="powered-by-tmdb.png" width="180" alt="Powered by tmdb" /> &nbsp;&nbsp;
            <Typography variant="body1" color="textSecondary" className={classes.title}>
              Developed by Gary Cheng
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
