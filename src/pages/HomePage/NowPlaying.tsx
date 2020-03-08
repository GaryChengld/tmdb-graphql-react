import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MovieCards } from '../../components';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const NOW_PLAYING_QUERY = gql`
  {
    nowPlayingMovies(page: 1, region: "US") {
      results {
        id
        title
        overview
        releaseDate
        posterPath(size: M)
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
      <MovieCards movies={movies} />
    </>
  );
}

function NowPlaying() {
  const classes = useStyles();
  const { data, loading } = useQuery(NOW_PLAYING_QUERY);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Typography variant="h5" color="textSecondary">
            In Theaters
          </Typography>
        </Grid>
        <Grid item>
          <Link href="/movie/nowPlaying" variant="body1">
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
