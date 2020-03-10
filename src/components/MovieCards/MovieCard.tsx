import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@material-ui/core';

import { MovieCardProps } from './types';
import { useDefaultStyle } from './styles';
import { MovieRating } from '..';

interface MovieProps {
  releaseDate?: any;
}

function ReleaseDate(props: MovieProps) {
  const { releaseDate } = props;
  return (
    <Typography variant="subtitle2" color="secondary">
      {releaseDate}
    </Typography>
  );
}

export default function MovieCard(props: MovieCardProps) {
  const classes = useDefaultStyle();
  const { movie } = props;
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} component="img" image={movie.backdropPath} title={movie.title} />
        <CardContent className={classes.cardContent}>
          {movie.voteAverage && <MovieRating rate={movie.voteAverage} />}
          <Typography gutterBottom variant="h6">
            {movie.title}
          </Typography>
          {movie.releaseDate && <ReleaseDate releaseDate={movie.releaseDate} />}
        </CardContent>
      </Card>
    </Link>
  );
}
