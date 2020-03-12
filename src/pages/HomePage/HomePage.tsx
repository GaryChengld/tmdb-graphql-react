import React from 'react';
import { Container } from '@material-ui/core/';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import FeaturedMovies from './FeaturedMovies';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <FeaturedMovies />
      <NowPlaying />
      <Upcoming />
    </Container>
  );
}
