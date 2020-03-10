import React from 'react';
import { Grid } from '@material-ui/core';

import { MovieCard, SimpleMovieCard } from '..';

interface MovieListProps {
  movies: any[];
  type?: any;
}

export default function MovieList(props: MovieListProps) {
  const { movies, type } = props;
  return (
    <>
      <Grid container spacing={2} justify="center">
        {movies.map((movie: any) => {
          if (type === 'simple') {
            return (
              <Grid item key={movie.id} xs={6} md={3} lg={2}>
                <SimpleMovieCard movie={movie} />
              </Grid>
            );
          } else {
            return (
              <Grid item key={movie.id} xs={12} md={4} lg={4}>
                <MovieCard movie={movie} />
              </Grid>
            );
          }
        })}
      </Grid>
    </>
  );
}
