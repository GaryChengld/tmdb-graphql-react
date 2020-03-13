import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MovieCardProps } from './types';
import { MovieRating } from '..';

const useStyle = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'all 0.4s',
    },
  },
  cardMedia: {
    height: 270,
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing(0),
  },
}));

export default function SimpleMovieCard(props: MovieCardProps) {
  const classes = useStyle();
  const { movie } = props;
  return (
    <Card className={classes.card}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia className={classes.cardMedia} component="img" image={movie.posterPath} title={movie.title} />
        <CardContent className={classes.cardContent}>
          {(movie.voteAverage || movie.voteAverage === 0) && <MovieRating rate={movie.voteAverage} />}
        </CardContent>
      </Link>
    </Card>
  );
}
