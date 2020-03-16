import React from 'react';
import { Container } from '@material-ui/core/';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading } from '../../components';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import FeaturedMovies from './FeaturedMovies';

export interface MoviesProps {
  movies: any[];
}

const HOME_PAGE_MOVIES_QUERY = gql`
  query featuredMovies($region: String) {
    popularMovies(page: 1, region: $region) {
      results {
        id
        title
        voteAverage
        releaseDate
        posterPath(size: L)
        backdropPath(size: M)
      }
    }
    nowPlayingMovies(page: 1, region: $region) {
      results {
        id
        title
        voteAverage
        posterPath(size: L)
        backdropPath(size: M)
        videos(type: "Trailer") {
          key
        }
      }
    }
    upcomingMovies(page: 1, region: $region) {
      results {
        id
        title
        releaseDate
        posterPath(size: L)
      }
    }
  }
`;
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
    </>
  );
}

export default function HomePage() {
  const variables = {
    region: process.env.REACT_APP_REGION,
  };
  const fetchPolicy = 'cache-first';
  const { data, loading } = useQuery(HOME_PAGE_MOVIES_QUERY, { variables, fetchPolicy });
  return (
    <Container maxWidth="lg">
      {loading && <Loading />}
      {data && renderPage(data)}
    </Container>
  );
}
