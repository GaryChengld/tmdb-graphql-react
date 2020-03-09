import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MovieCards } from '../../components';
import useStyles from './styles';

const UPCOMINMG_QUERY = gql`
  {
    upcomingMovies(page: 1, region: "US") {
      results {
        id
        title
        releaseDate
        backdropPath(size: M)
      }
    }
  }
`;

function renderMovies(data: any) {
  const movies = data['upcomingMovies'].results.slice(0, 4);
  return (
    <>
      <MovieCards movies={movies} type='normal' />
    </>
  );
}

function Upcoming() {
  const classes = useStyles();
  const { data, loading } = useQuery(UPCOMINMG_QUERY);
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs>
          <Typography variant="h5" color="textSecondary">
            Coming Soon
          </Typography>
        </Grid>
        <Grid item>
          <Link variant="body1" component={ReactLink} to="/movie/upcoming">
            View all
          </Link>
        </Grid>
      </Grid>
      <Box height={8} />
      {loading && <Loading />}
      {data && renderMovies(data)}
    </div>
  );
}

export default Upcoming;
