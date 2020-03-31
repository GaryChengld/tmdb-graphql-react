import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Grid } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';

import * as queries from '../../Queries';
import { Loading, BackgroundImage } from '../../components';

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
  content: {
    marginTop: 200,
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
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

export default function MovieCast(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  return (
    <>
      Movie Cast, movie id {id}
    </>
  );
}
