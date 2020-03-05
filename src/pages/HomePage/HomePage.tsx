import React, { Component } from 'react';
import { Box, Container } from '@material-ui/core/';
import NowPlaying from './NowPlaying';

class HomePage extends Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Box height={12} />
        <NowPlaying />
      </Container>
    );
  }
}

export default HomePage;
