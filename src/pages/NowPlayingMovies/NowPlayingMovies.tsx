import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Container, Grid, Box, Typography } from '@material-ui/core/';
import { Theme, makeStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, MoviePagination } from '../../components';

interface ComponentProps extends RouteComponentProps {
  page: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const NOW_PLAYING_MOVIES_QUERY = gql`
  query nowPlayingMovies($page: Int!, $region: String) {
    nowPlayingMovies(page: $page, region: $region) {
      page
      totalPages
      results {
        id
        title
        overview
        voteAverage
        releaseDate
        posterPath(size: L)
        backdropPath(size: L)
      }
    }
  }
`;

function renderPage(data: any, onPageChange: (page: number) => void) {
  const {
    nowPlayingMovies: { page, totalPages, results: movies },
  } = data;
  return <MoviePagination page={page} totalPages={totalPages} movies={movies} onPageChange={onPageChange} />;
}

function NowPlayingMovies(props: ComponentProps) {
  const classes = useStyles();
  let page = props.page;
  if (!page) {
    page = 1;
  }
  const region = process.env.REACT_APP_REGION;
  const variables = { page, region };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(NOW_PLAYING_MOVIES_QUERY, { variables, fetchPolicy });
  const loadPage = (pageNo: number) => {
    props.history.push(`/movie/nowPlaying?page=${pageNo}`);
  };

  return (
    <Container maxWidth="lg">
      <div className={classes.container}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography variant="h5" color="inherit">
              <Box fontWeight="fontWeightBold" m={1}>
                In Theaters
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </div>
      {loading && <Loading />}
      {data && renderPage(data, loadPage)}
    </Container>
  );
}

export default withRouter(NowPlayingMovies);
