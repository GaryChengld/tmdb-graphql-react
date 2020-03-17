import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MovieCardProps } from './types';
import { MovieRating, DisplayDate } from '..';

const useStyle = makeStyles(theme => ({
  card: {
    height: '100%',
    width: 190,
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
    paddingBottom: theme.spacing(0),
  },
  title: {
    overflow: 'hidden',
  },
}));

export default function SimpleMovieCard(props: MovieCardProps) {
  const classes = useStyle();
  const { movie } = props;
  const imageUrl = movie.posterPath ? movie.posterPath : 'not_found.png';
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          component="img"
          image={imageUrl}
          title={movie.title}
          alt={movie.title}
        />
        <CardContent className={classes.cardContent}>
          {(movie.voteAverage || movie.voteAverage === 0) && <MovieRating rate={movie.voteAverage} />}
          <Typography className={classes.title} gutterBottom variant="subtitle1" color="secondary" noWrap>
            {movie.title}
          </Typography>
          {movie.releaseDate && <DisplayDate date={movie.releaseDate} variant="subtitle1" />}
        </CardContent>
      </Card>
    </Link>
  );
}
