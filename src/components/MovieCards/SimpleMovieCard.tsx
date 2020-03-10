import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@material-ui/core';

import { MovieCardProps } from './types';
import { useDefaultStyle } from './styles';
import { MovieRating } from '..';

export default function SimpleMovieCard(props: MovieCardProps) {
  const classes = useDefaultStyle();
  const { movie } = props;
  return (
    <Card className={classes.card}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia className={classes.cardMedia} component="img" image={movie.posterPath} title={movie.title} />
        <CardContent className={classes.cardContent}>
          {movie.voteAverage && <MovieRating rate={movie.voteAverage} />}
        </CardContent>
      </Link>
    </Card>
  );
}
