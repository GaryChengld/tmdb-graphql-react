import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { PosterCard, TrailerCard } from '../../components';
import { MoviesProps } from './HomePage';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    'white-space': 'nowrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    imgFullWidth: true,
  },
}));

export default function FeaturedMovies(props: MoviesProps) {
  const classes = useStyles();
  const { movies } = props;
  return (
    <div className={classes.root}>
      <GridList cols={12} spacing={0} className={classes.gridList}>
        <GridListTile key={1} cols={2} rows={2}>
          <PosterCard movie={movies[0]} />
        </GridListTile>
        <GridListTile key={0} cols={6} rows={2}>
          <TrailerCard movie={movies[0]} />
        </GridListTile>
        <GridListTile key={2} cols={2} rows={2}>
          <PosterCard movie={movies[1]} />
        </GridListTile>
        <GridListTile key={3} cols={2} rows={2}>
          <PosterCard movie={movies[2]} />
        </GridListTile>
      </GridList>
    </div>
  );
}