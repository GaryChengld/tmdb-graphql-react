import React from 'react';
import { Grid } from '@material-ui/core/';

import { SimpleMovieCard } from '../../components';

interface MovieResultsProps {
  movies: any[];
}

export default function MovieResults(props: MovieResultsProps) {
  const { movies } = props;
  return (
    <Grid container spacing={2} justify="flex-start">
      {movies.map((movie: any) => (
        <Grid item key={movie.id} xs={6} md={3} lg={2}>
          <SimpleMovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
