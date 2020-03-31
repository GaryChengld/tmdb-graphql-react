import React from 'react';
import { RouteComponentProps } from 'react-router';

interface PathParams {
  id: string;
}

export default function PersonDetails(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  return <>Person Detail, person id {id}</>;
}
