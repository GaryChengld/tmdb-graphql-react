import React from 'react';
import { Container, Box } from '@material-ui/core/';
import { Theme, makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';

import { Loading } from '../../components';
import * as queries from '../../Queries';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import Popular from './Popular';

export interface MoviesProps {
  movies: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function renderPage(data: any) {
  const {
    popularMovies: { results: popularMovies },
    nowPlayingMovies: { results: nowPlayingMovies },
    upcomingMovies: { results: upcomingMovies },
  } = data;
  return (
    <>
      <NowPlaying movies={nowPlayingMovies} />
      <Box mt={2} />
      <Upcoming movies={upcomingMovies} />
      <Box mt={2} />
      <Popular movies={popularMovies} />
    </>
  );
}

export default function HomePage() {
  const classes = useStyles();
  const variables = {
    region: process.env.REACT_APP_REGION,
  };
  const fetchPolicy = 'cache-first';
  const { data, loading } = useQuery(queries.homePageQuery, { variables, fetchPolicy });
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        {loading && <Loading />}
        {data && renderPage(data)}
      </div>
    </Container>
  );
}
