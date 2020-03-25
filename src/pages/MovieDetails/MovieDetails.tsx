import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Grid, Typography, Box, Card, CardContent, CardMedia } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import StarRateIcon from '@material-ui/icons/StarRate';

import * as queries from '../../Queries';
import { Loading, BackgroundImage } from '../../components';
import * as utils from '../../CommonUtils';

interface MatchParams {
  id: string;
}

interface MovieProps {
  movie: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  gridList: {
    imgFullWidth: true,
  },
  grid: {
    height: '100%',
  },
  infoCard: {
    marginTop: 120,
    position: 'relative',
    display: 'flex',
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
  },
  cardImage: {
    width: 300,
    height: 480,
    paddingTop: theme.spacing(0),
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flex: '1 0 auto',
    padding: theme.spacing(4),
  },
  starIcon: {
    marginTop: theme.spacing(2),
    fontSize: 40,
  },
}));

function getBackdrop(movie: any): string | undefined {
  const {
    images: { backdrops },
  } = movie;

  if (backdrops) {
    return backdrops[Math.floor(Math.random() * backdrops.length)];
  } else {
    return undefined;
  }
}

function MovieInfoCard(props: MovieProps) {
  const classes = useStyles();
  const { movie } = props;
  const imagePath = movie.posterPath ? movie.posterPath : '/not_found.png';
  return (
    <Card className={classes.infoCard}>
      <CardMedia className={classes.cardImage} component="img" image={imagePath} />
      <div className={classes.cardDetails}>
        <CardContent className={classes.cardContent}>
          <div>
            <Typography gutterBottom variant="h4" component="span">
              {movie.title}{' '}
            </Typography>
            <Typography gutterBottom variant="h5" component="span">
              ({movie.releaseYear})
            </Typography>
          </div>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <StarRateIcon color="secondary" fontSize="large" />
            </Grid>
            <Grid item>
              <Typography color="textPrimary" variant="h6">
                {movie.voteAverage}/10
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Card>
  );
}

function MovieDetailInfo(props: MovieProps) {
  const { movie } = props;
  const backdrop = getBackdrop(movie);
  const classes = useStyles();
  return (
    <BackgroundImage imagePath={backdrop}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <MovieInfoCard movie={movie} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </BackgroundImage>
  );
}

export default function MovieDetails(props: RouteComponentProps<MatchParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(queries.movieDetailQuery, { variables, fetchPolicy });
  return (
    <>
      {data && <MovieDetailInfo movie={data.movieDetail} />}
      {loading && <Loading />}
    </>
  );
}
