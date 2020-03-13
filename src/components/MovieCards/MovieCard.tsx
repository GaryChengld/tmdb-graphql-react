import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@material-ui/core';
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
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing(0),
  },
}));

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
  const classes = useStyle();
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
