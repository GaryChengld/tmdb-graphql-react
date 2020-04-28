import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  HomePage,
  UpcomingMovies,
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
  SearchMovies,
  MoviesByGenre,
  MovieDetails,
  MovieCast,
  PersonDetails,
} from './pages';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={HomePage} />
      <Route path="/movie/nowPlaying" component={NowPlayingMovies} />
      <Route path="/movie/upcoming" component={UpcomingMovies} />
      <Route path="/movie/popular" component={PopularMovies} />
      <Route path="/movie/topRated" component={TopRatedMovies} />
      <Route path="/movie/search/:text" component={SearchMovies} />
      <Route path="/movie/genre/:genre" component={MoviesByGenre} />
      <Route path="/movie/cast/:id" component={MovieCast} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/person/:id" component={PersonDetails} />
    </Switch>
  );
}
