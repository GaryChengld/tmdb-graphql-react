import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MovieCardProps } from './types';

const useStyle = makeStyles(theme => ({
  card: {
    position: 'relative',
    height: '100%',
    display: 'flex',
  },
  cardMedia: {
    height: '100%',
    paddingTop: theme.spacing(0),
  },
  overlay: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
  },
}));

export default function PosterCard(props: MovieCardProps) {
  const classes = useStyle();
  const { movie } = props;
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} component="img" image={movie.posterPath} title={movie.title} />
      </Card>
    </Link>
  );
}
