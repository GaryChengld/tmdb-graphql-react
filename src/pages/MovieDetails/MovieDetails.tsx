import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Grid } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';


import * as queries from '../../Queries';
import { Loading, BackgroundImage } from '../../components';
import MovieInfo from './MovieInfo';

interface PathParams {
  id: string;
}

interface MovieProps {
  movie: any;
  loading?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  movieInfo: {
    marginTop: 120,
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

function MovieDetailInfo(props: MovieProps) {
  const { movie, loading } = props;
  const backdrop = loading ? undefined : getBackdrop(movie);
  const classes = useStyles();
  return (
    <BackgroundImage imagePath={backdrop}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.movieInfo}>
                <MovieInfo movie={movie} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </BackgroundImage>
  );
}

export default function MovieDetails(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(queries.movieDetailQuery, { variables, fetchPolicy });
  return (
    <>
      {data && <MovieDetailInfo movie={data.movieDetail} loading={loading} />}
      {!data && loading && <Loading />}
    </>
  );
}
