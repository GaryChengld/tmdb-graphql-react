import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardActions, CardContent, CardMedia, Button, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import { Rating } from '@material-ui/lab';

interface MovieCardProps {
  movie: any;
}

interface MovieProps {
  rate?: any;
  releaseDate?: any;
}

const useStyles = makeStyles(theme => ({
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

function Rate(props: MovieProps) {
  const { rate } = props;
  return <Rating name="customized-10" value={rate / 2} precision={0.5} readOnly />;
}

function ReleaseDate(props: MovieProps) {
  const { releaseDate } = props;
  return (
    <Typography gutterBottom variant="subtitle2" style={{ color: yellow[500] }}>
      {releaseDate}
    </Typography>
  );
}

export default function MovieCard(props: MovieCardProps) {
  const classes = useStyles();
  const { movie } = props;
  return (
    <Card className={classes.card}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia className={classes.cardMedia} component="img" image={movie.backdropPath} title={movie.title} />
      </Link>
      <CardContent className={classes.cardContent}>
        {movie.voteAverage && <Rate rate={movie.voteAverage} />}
        <Typography gutterBottom variant="subtitle1" component="h2">
          {movie.title}
        </Typography>
        {movie.releaseDate && <ReleaseDate releaseDate={movie.releaseDate} />}
      </CardContent>
      <Divider light />
      <CardActions>
        <Button size="small" color="default" component={Link} to={`/movie/${movie.id}`}>
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
