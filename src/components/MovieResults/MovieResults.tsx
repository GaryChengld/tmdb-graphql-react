import React from 'react';
import { Grid } from '@material-ui/core/';

import { MovieCard } from '../../components';

interface MovieResultsProps {
  movies: any[];
}

export default function MovieResults(props: MovieResultsProps) {
  const { movies } = props;
  return (
    <Grid container spacing={4} justify="flex-start">
      {movies.map((movie: any) => (
        <Grid item key={movie.id} xs={12} md={6} lg={6}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
