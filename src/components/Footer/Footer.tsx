import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography, Link, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      flexGrow: 1,
    },
  }),
);

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Box mt={4}>
          <Typography variant="body1" align="center">
            Developed by |{' '}
            <Link href="https://github.com/GaryChengld" target="_blank" rel="noopener">
              Gary Cheng
            </Link>
          </Typography>
        </Box>
        <Box mt={1}>
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
      </Container>
    </div>
  );
}
