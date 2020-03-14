import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MovieCard } from '../../components';
import useStyles from './styles';

const UPCOMINMG_QUERY = gql`
  query upcomingMovies($region: String) {
    upcomingMovies(page: 1, region: $region) {
      results {
        id
        title
        overview
        releaseDate
        backdropPath(size: M)
      }
    }
  }
`;

const variables = {
  region: process.env.REACT_APP_REGION,
};

function renderMovies(data: any) {
  const movies = data['upcomingMovies'].results.slice(0, 3);
  return (
    <Grid container spacing={2} justify="center">
      {movies.map((movie: any) => (
        <Grid item key={movie.id} xs={12} md={4} lg={4}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

function Upcoming() {
  const classes = useStyles();
  const { data, loading } = useQuery(UPCOMINMG_QUERY, { variables, fetchPolicy: 'cache-first' });
  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h5" color="inherit">
            <Box fontWeight="fontWeightBold" m={1}>
              Coming Soon
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Link variant="body1" component={ReactLink} to="/movie/upcoming">
            View more
          </Link>
        </Grid>
      </Grid>
      {loading && <Loading />}
      {data && renderMovies(data)}
    </div>
  );
}

export default Upcoming;
