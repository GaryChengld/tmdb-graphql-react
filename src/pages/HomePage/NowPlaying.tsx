import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MovieList } from '../../components';
import useStyles from './styles';

const NOW_PLAYING_QUERY = gql`
  query nowPlayingMovies($region: String) {
    nowPlayingMovies(page: 1, region: $region) {
      results {
        id
        title
        backdropPath(size: M)
        posterPath(size: L)
        voteAverage
      }
    }
  }
`;

const variables = {
  region: process.env.REACT_APP_REGION,
};

function renderMovies(data: any) {
  const movies = data['nowPlayingMovies'].results.slice(0, 6);
  return (
    <>
      <MovieList movies={movies} type="simple" />
    </>
  );
}

function NowPlaying() {
  const classes = useStyles();
  const { data, loading } = useQuery(NOW_PLAYING_QUERY, { variables });
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs>
          <Typography variant="h5" color="textSecondary">
            In Theaters
          </Typography>
        </Grid>
        <Grid item>
          <Link variant="body1" component={ReactLink} to="/movie/nowPlaying">
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

export default NowPlaying;
