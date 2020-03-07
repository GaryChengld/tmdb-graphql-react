import React from 'react';
import { Box, Typography } from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MovieCards } from '../../components';

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
  const { data, loading } = useQuery(NOW_PLAYING_QUERY);
  return (
    <>
      <Typography variant="h5" color="textSecondary">
        In Theaters
      </Typography>
      <Box height={8} />
      {loading && <Loading />}
      {data && renderMovies(data)}
    </>
  );
}

export default NowPlaying;
