import React from 'react';
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface MovieCardsProps {
  movies: any[];
}

const useStyles = makeStyles(theme => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function MovieCards(props: MovieCardsProps) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={4} justify="center">
        {props.movies.map((movie: any) => (
          <Grid item key={movie.id} xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={movie.backdropPath} title={movie.title} />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {movie.title}
                </Typography>
                <Typography color="textSecondary">{movie.overview}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  More info
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
