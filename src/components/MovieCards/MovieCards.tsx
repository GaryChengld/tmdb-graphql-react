import React from 'react';
import { Grid } from '@material-ui/core';

import { MovieCard } from '../../components';

interface MovieCardsProps {
  movies: any[];
  style?: any;
}

export default function MovieCards(props: MovieCardsProps) {
  const { movies, style } = props;
  return (
    <>
      <Grid container spacing={2} justify="center">
        {movies.map((movie: any) => (
          <Grid item key={movie.id} xs={12} md={6} lg={3}>
            {style && style === 'normal' && <MovieCard movie={movie} />}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
