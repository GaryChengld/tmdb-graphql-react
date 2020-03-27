import React from 'react';
import { QueryMovies } from '../../components';
import * as queries from '../../Queries';

export function NowPlayingMovies() {
  return <QueryMovies query={queries.nowPlayingMoviesQuery} title="In Theaters" />;
}

export function UpcomingMovies() {
  return <QueryMovies query={queries.upcomingMoviesQuery} title="Coming Soon" />;
}

export function PopularMovies() {
  return <QueryMovies query={queries.popularMoviesQuery} title="Popular Movies" />;
}

export function TopRatedMovies() {
  return <QueryMovies query={queries.topRatedMoviesQuery} title="Top Rated" />;
}
