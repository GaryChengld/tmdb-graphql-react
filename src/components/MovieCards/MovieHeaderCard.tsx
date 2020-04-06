import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

import { MovieCardProps } from './types';
import { MovieRating } from '..';
import * as utils from '../../CommonUtils';

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  cardMedia: {
    width: 80,
    height: 120,
    paddingTop: theme.spacing(0),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flex: '1 0 auto',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  header: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  title: {
    marginRight: theme.spacing(1),
  },
  releaseYear: {
    marginLeft: theme.spacing(0),
  },
  rate: {
    paddingTop: theme.spacing(1),
  },
}));

export default function MovieHeaderCard(props: MovieCardProps) {
  const classes = useStyle();
  const { movie } = props;
  const imageUrl = movie.posterPath ? movie.posterPath : '/not_found.png';
  const movieUrl = utils.getMovieDetailPath(movie.id);
  return (
    <Card className={classes.root}>
      <Link component={ReactLink} to={movieUrl} underline="none">
        <CardMedia className={classes.cardMedia} component="img" image={imageUrl} title={movie.title} />
      </Link>
      <div className={classes.details}>
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <Link component={ReactLink} to={movieUrl} underline="none">
              <Typography gutterBottom className={classes.title} color="textPrimary" variant="h4" component="span">
                {movie.title}
              </Typography>
            </Link>
            <Typography className={classes.releaseYear} variant="h5" component="span" color="textSecondary">
              ({movie.releaseYear})
            </Typography>
            <div className={classes.rate}>
              {(movie.voteAverage || movie.voteAverage === 0) && <MovieRating rate={movie.voteAverage} />}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
