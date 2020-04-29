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

interface GenrePathParams {
  genre: string;
}

interface YearPathParams {
  year: string;
}

function SearchMovies(props: RouteComponentProps<SearchPathParams>) {
  const text: string = props.match.params.text;
  const parentVariables = { query: text };
  return <QueryMovies query={queries.searchMovieQuery} parentVariables={parentVariables} title="Search Results" />;
}

function MoviesByGenre(props: RouteComponentProps<GenrePathParams>) {
  const genreParam: string = props.match.params.genre;
  const strs: string[] = genreParam.split('-');
  const genreId: string = strs[0];
  const genreName: string = strs[1];
  const parentVariables = { genre: genreId };
  return <QueryMovies query={queries.moviesByGenreQuery} parentVariables={parentVariables} title={genreName} />;
}

function MoviesByYear(props: RouteComponentProps<YearPathParams>) {
  const year: string = props.match.params.year;
  const parentVariables = { year: parseInt(year) };
  return <QueryMovies query={queries.moviesByYearQuery} parentVariables={parentVariables} title={year} />;
}

const SearchMoviesWithRouter = withRouter(SearchMovies);
const MoviesByGenreWithRouter = withRouter(MoviesByGenre);
const MoviesByYearWithRouter = withRouter(MoviesByYear);

export {
  SearchMoviesWithRouter as SearchMovies,
  MoviesByGenreWithRouter as MoviesByGenre,
  MoviesByYearWithRouter as MoviesByYear,
};
