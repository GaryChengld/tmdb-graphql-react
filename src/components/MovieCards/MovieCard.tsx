import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MovieCardProps } from './types';
import { MovieRating } from '..';
import * as utils from '../../CommonUtils';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
  },
  cardMedia: {
    width: 120,
    height: 180,
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    opacity: 1,
  },
  header: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  title: {
    marginRight: theme.spacing(1),
  },
  releaseDate: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  clip: {
    marginRight: theme.spacing(0.5),
  },
}));

export default function MovieCard(props: MovieCardProps) {
  const classes = useStyle();
  const { movie } = props;
  const imageUrl = movie.posterPath ? movie.posterPath : '/not_found.png';
  return (
    <Card className={classes.root} raised>
      <Link className={classes.cardMedia} to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
        <CardMedia className={classes.cardMedia} component="img" image={imageUrl} title={movie.title} />
      </Link>
      <CardContent className={classes.cardContent}>
        <div className={classes.header}>
          <Typography gutterBottom className={classes.title} color="primary" variant="h6" component="span">
            {movie.title}
          </Typography>
          {(movie.voteAverage || movie.voteAverage === 0) && <MovieRating rate={movie.voteAverage} />}
        </div>
        {movie.releaseDate && (
          <Typography className={classes.releaseDate} variant="subtitle1" component="div">
            {utils.formatDate(movie.releaseDate)}
          </Typography>
        )}
        {movie.genres.map((g: any) => (
          <Chip key={g.name} className={classes.clip} size="medium" label={g.name} />
        ))}
      </CardContent>
    </Card>
  );
}
