import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography, Link, Box, AppBar } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box mt={4} />
      <AppBar position="static" color="default">
        <Box mt={2}>
          <Typography variant="body1" align="center">
            Developed by |{' '}
            <Link href="https://github.com/GaryChengld" target="_blank" rel="noopener">
              Gary Cheng
            </Link>
          </Typography>
        </Box>
        <Box mt={1} mb={2}>
          <Typography variant="body1" align="center">
            <Link href="https://www.themoviedb.org/" target="_blank" rel="noopener">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
                alt="Powered by tmdb"
                width="120"
              />
            </Link>
          </Typography>
        </Box>
      </AppBar>
    </div>
  );
};
