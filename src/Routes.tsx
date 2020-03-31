import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  HomePage,
  UpcomingMovies,
  NowPlayingMovies,
  PopularMovies,
  TopRatedMovies,
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
      <Route path="/movie/cast/:id" component={MovieCast} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route path="/person/:id" component={PersonDetails} />
    </Switch>
  );
}
