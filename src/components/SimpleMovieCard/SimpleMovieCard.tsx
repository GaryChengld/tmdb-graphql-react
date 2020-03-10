import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    paddingBottom: 0,
  },
}));

function Rate(props: MovieProps) {
  const { rate } = props;
  return <Rating name="customized-10" value={rate / 2} precision={0.5} readOnly />;
}

export default function SimpleMovieCard(props: MovieCardProps) {
  const classes = useStyles();
  const { movie } = props;
  return (
    <Card className={classes.card}>
      <Link to={`/movie/${movie.id}`}>
        <CardMedia className={classes.cardMedia} component="img" image={movie.posterPath} title={movie.title} />
        <CardContent className={classes.cardContent}>
          {movie.voteAverage && <Rate rate={movie.voteAverage} />}
        </CardContent>
      </Link>
    </Card>
  );
}
