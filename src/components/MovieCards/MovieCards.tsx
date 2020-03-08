import React from 'react';
import { Grid, Typography, Card, CardActions, CardContent, CardMedia, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

interface MovieCardsProps {
  movies: any[];
}

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: 0,
  },
}));

export default function MovieCards(props: MovieCardsProps) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} justify="center">
        {props.movies.map((movie: any) => (
          <Grid item key={movie.id} xs={12} md={6} lg={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} component="img" image={movie.backdropPath} title={movie.title} />
              <CardContent className={classes.cardContent}>
                <Rating name="customized-10" value={movie.voteAverage / 2} precision={0.5} readOnly />
                <Typography gutterBottom variant="subtitle1" component="h2">
                  {movie.title}
                </Typography>
              </CardContent>
              <Divider light />
              <CardActions>
                <Button size="small" color="default" href={`/movie/${movie.id}`}>
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
