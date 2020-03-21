import React from 'react';
import { Container } from '@material-ui/core/';
import { useQuery } from '@apollo/react-hooks';

import { Loading } from '../../components';
import * as queries from '../../Queries';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import Popular from './Popular';

export interface MoviesProps {
  movies: any[];
}

function renderPage(data: any) {
  const {
    popularMovies: { results: popularMovies },
    nowPlayingMovies: { results: nowPlayingMovies },
    upcomingMovies: { results: upcomingMovies },
  } = data;
  return (
    <>
      <NowPlaying movies={nowPlayingMovies} />
      <Upcoming movies={upcomingMovies} />
      <Popular movies={popularMovies} />
    </>
  );
}

export default function HomePage() {
  const variables = {
    region: process.env.REACT_APP_REGION,
  };
  const fetchPolicy = 'cache-first';
  const { data, loading } = useQuery(queries.homePageQuery, { variables, fetchPolicy });
  return (
    <Container maxWidth="lg">
      {loading && <Loading />}
      {data && renderPage(data)}
    </Container>
  );
}
