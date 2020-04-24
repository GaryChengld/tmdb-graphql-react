import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
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

interface SearchPathParams {
  text: string;
}

function SearchMovies(props: RouteComponentProps<SearchPathParams>) {
  const text: string = props.match.params.text;
  const parentVariables = { query: text };
  return <QueryMovies query={queries.searchMovieQuery} parentVariables={parentVariables} title="Search Results" />;
}

const SearchMoviesWithRouter = withRouter(SearchMovies);

export { SearchMoviesWithRouter as SearchMovies };
