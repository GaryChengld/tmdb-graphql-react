import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MovieCards } from '../../components';
import useStyles from './styles';

const NOW_PLAYING_QUERY = gql`
  {
    nowPlayingMovies(page: 1, region: "US") {
      results {
        id
        title
        backdropPath(size: M)
        voteAverage
      }
    }
  }
`;

function renderMovies(data: any) {
  const movies = data['nowPlayingMovies'].results.slice(0, 4);
  return (
    <>
      <MovieCards movies={movies} type="normal" />
    </>
  );
}

function NowPlaying() {
  const classes = useStyles();
  const { data, loading } = useQuery(NOW_PLAYING_QUERY);
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
