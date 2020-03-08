import React from 'react';
import { Container, Divider } from '@material-ui/core/';
import NowPlaying from './NowPlaying';

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <NowPlaying />
      <Divider light />
    </Container>
  );
}
