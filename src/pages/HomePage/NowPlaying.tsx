import React from 'react';
import { Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const NOW_PLAYING_QUERY = gql`
  {
    nowPlayingMovies(page: 1, region: "US") {
      results {
        id
        title
        releaseDate
        posterPath(size: M)
        voteAverage
      }
    }
  }
`;

function renderLoading() {
  return (
    <>
      <Typography variant="h6" color="textSecondary">
        Loading...
      </Typography>
    </>
  );
}

function renderMovies(movies: any[]) {
  return (
    <>
      <Typography variant="h6" color="primary">
        Movies loaded
      </Typography>
    </>
  );
}

function NowPlaying() {
  const { data, loading } = useQuery(NOW_PLAYING_QUERY);
  let movies;
  if (data) {
    const {
      nowPlayingMovies: { results },
    } = data;
    movies = results.slice(0, 6);
  }
  return (
    <>
      <Typography variant="h5" color="textSecondary">
        Now Playing
      </Typography>
      {loading && renderLoading}
      {movies && renderMovies(movies)}
    </>
  );
}

export default NowPlaying;
