import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Container, Grid, Typography, Box } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';

import { Loading, Pagination, MovieResults, BackgroundImage } from '../../components';
import * as utils from '../../CommonUtils';

interface QueryMoviesProps extends RouteComponentProps {
  title: string;
  query: DocumentNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    'z-index': 1,
  },
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  header: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
}));

const PAGE_PARAM = 'page';

function renderData(data: any) {
  const {
    movieData: { results: movies },
  } = data;
  return <MovieResults movies={movies} />;
}

function renderPagination(data: any, onPageChange: (page: number) => void) {
  const {
    movieData: { page, totalPages },
  } = data;
  return <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />;
}

function getBackgroundImage(data: any) {
  if (!data) {
    return null;
  } else {
    const {
      movieData: { results: movies },
    } = data;
    const images: any[] = movies.filter((m: any) => m.backdropPath).map((m: any) => m.backdropPath);
    return images[Math.floor(Math.random() * images.length)];
  }
}

function QueryMovies(props: QueryMoviesProps) {
  const classes = useStyles();
  const {
    title,
    query,
    location: { pathname },
  } = props;
  const page = utils.getPageNoFromUrl(props, PAGE_PARAM);
  const region = process.env.REACT_APP_REGION;
  const variables = { page, region };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(query, { variables, fetchPolicy });

  const loadPage = (pageNo: number) => {
    props.history.push(`${pathname}?${PAGE_PARAM}=${pageNo}`);
    window.scrollTo(0, 0);
  };
  const backgroundImage = loading ? null : getBackgroundImage(data);
  return (
    <BackgroundImage imagePath={backgroundImage}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.root}>
          <div className={classes.header}>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="h5" color="inherit">
                  <Box fontWeight="fontWeightBold">{title}</Box>
                </Typography>
              </Grid>
            </Grid>
          </div>
          {!loading && data && renderData(data)}
          {!loading && data && renderPagination(data, loadPage)}
          {loading && <Loading />}
        </div>
      </Container>
    </BackgroundImage>
  );
}

export default withRouter(QueryMovies);
