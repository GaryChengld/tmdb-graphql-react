import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Container } from '@material-ui/core/';
import { useQuery } from '@apollo/react-hooks';
import { DocumentNode } from 'graphql';

import { Loading, Pagination, MovieResults, PageTitle } from '../../components';
import * as utils from '../../CommonUtils';

interface QueryMoviesProps extends RouteComponentProps {
  title: string;
  query: DocumentNode;
}

const PAGE_PARAM = 'page';

function renderPage(data: any, onPageChange: (page: number) => void) {
  const {
    movieData: { page, totalPages, results: movies },
  } = data;
  return (
    <>
      <MovieResults movies={movies} />
      <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
    </>
  );
}

function QueryMovies(props: QueryMoviesProps) {
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

  return (
    <Container maxWidth="lg">
      <PageTitle title={title} />
      {!loading && data && renderPage(data, loadPage)}
      {loading && <Loading />}
    </Container>
  );
}

export default withRouter(QueryMovies);
