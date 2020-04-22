import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Grid, Typography, Card, Link, CardMedia } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as utils from '../../CommonUtils';

interface KnownForProps {
  knownFor: any[];
}

interface MovieProps {
  movie: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
  },
  header: {
    marginLeft: theme.spacing(0),
    fontWeight: 'bold',
  },
  card: {
    position: 'relative',
    display: 'flex',
    height: '100%',
  },
  cardMedia: {
    height: '100%',
    paddingTop: theme.spacing(0),
  },
}));

function MovieCard(props: MovieProps) {
  const { movie } = props;
  const classes = useStyles();
  const imageUrl = movie.posterPath ? movie.posterPath : '/not_found.png';
  return (
    <Link component={ReactLink} to={utils.getMovieDetailPath(movie.id)}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} component="img" image={imageUrl} title={movie.title} />
      </Card>
    </Link>
  );
}

export default function KnownFor(props: KnownForProps) {
  const { knownFor } = props;
  const movies = knownFor.slice(0, 12);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={classes.header}>
            <Typography variant="h6">Known For</Typography>
          </Box>
        </Grid>
        {movies.map((movie: any) => (
          <Grid key={movie.id} item xs={6}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
