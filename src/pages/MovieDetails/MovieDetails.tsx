import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Grid } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';

import * as queries from '../../Queries';
import { Loading, BackgroundImage } from '../../components';
import MovieInfo from './MovieInfo';
import Casts from './Casts';
import Videos from './Videos';
import Recommendations from './Recommendations';
import Images from './Images';

interface PathParams {
  id: string;
}

interface MovieProps {
  movie: any;
  loading?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
  },
  container: {
    paddingTop: 200,
    paddingBottom: 40,
  },
}));

function getBackdrop(movie: any): string | undefined {
  const {
    images: { backdrops },
  } = movie;

  if (backdrops && backdrops.length > 0) {
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
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <div>
                <MovieInfo movie={movie} />
              </div>
            </Grid>
            <Grid item xs={10}>
              <div>{movie.casts && movie.casts.length > 0 && <Casts casts={movie.casts} movieId={movie.id} />}</div>
              <div>{movie.videos && movie.videos.length > 0 && <Videos videos={movie.videos} />}</div>
              <div>
                <Images movie={movie} />
              </div>
            </Grid>
            <Grid item xs={2}>
              <div>
                {movie.recommendations.results.length > 0 && (
                  <Recommendations recommendations={movie.recommendations} />
                )}
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
  if (loading) {
    window.scrollTo(0, 0);
  }
  return (
    <>
      {!loading && data && <MovieDetailInfo movie={data.movieDetail} loading={loading} />}
      {loading && <Loading />}
    </>
  );
}
