import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';

import { Loading, Pagination, MovieResults, PageTitle, BackgroundImage } from '../../components';
import * as utils from '../../CommonUtils';

interface QueryMoviesProps extends RouteComponentProps {
  title: string;
  query: DocumentNode;
}

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    'z-index': 1,
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 'auto',
    opacity: '0.3',
    'z-index': -1,
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
    <>
      <BackgroundImage imagePath={backgroundImage}>
        <Container className={classes.container} maxWidth="lg">
          <PageTitle title={title} />
          {!loading && data && renderData(data)}
          {!loading && data && renderPagination(data, loadPage)}
          {loading && <Loading />}
        </Container>
      </BackgroundImage>
    </>
  );
}

export default withRouter(QueryMovies);
