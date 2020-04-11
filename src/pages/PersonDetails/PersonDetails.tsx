import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from '@apollo/react-hooks';

import { Loading, BackgroundImage } from '../../components';
import * as queries from '../../Queries';

interface PathParams {
  id: string;
}

export default function PersonDetails(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(queries.personQuery, { variables, fetchPolicy });

  return (
    <>
      {loading && <Loading />}
      {data && (
        <>{data.person.name}</>
      )}
    </>
  );
}
