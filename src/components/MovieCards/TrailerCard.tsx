import React from 'react';
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

export default function TrailerCard(props: MovieCardProps) {
  const classes = useStyle();
  const { movie } = props;
  const trailerUrl = `https://www.youtube.com/embed/${movie.videos[0].key}?modestbranding=1&iv_load_policy=3&rel=0`;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        component="iframe"
        src={trailerUrl}
        title={movie.title}
        frameBorder={0}
      />
    </Card>
  );
}
