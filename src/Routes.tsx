import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, UpcomingMovies, NowPlayingMovies, MovieDetails } from './pages';

function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home" component={HomePage} />
      <Route path="/movie/nowPlaying" component={NowPlayingMovies} />
      <Route path="/movie/upcoming" component={UpcomingMovies} />
      <Route path="/movie/:id" component={MovieDetails} />
    </Switch>
  );
}

export default Routes;
