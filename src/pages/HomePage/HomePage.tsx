import React from 'react';
import { Container } from '@material-ui/core/';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <NowPlaying />
      <Upcoming />
    </Container>
  );
}
