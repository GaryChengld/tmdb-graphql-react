import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Grid, Typography, Link, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Loading, PosterCard } from '../../components';

const POPULAR_MOVIES_QUERY = gql`
  query popularMovies($region: String) {
    popularMovies(page: 1, region: $region) {
      results {
        id
        title
        voteAverage
        releaseDate
        posterPath(size: L)
        backdropPath(size: M)
      }
    }
  }
`;

const variables = {
  region: process.env.REACT_APP_REGION,
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    imgFullWidth: true,
  },
}));

function renderMovies(data: any, classes: any) {
  const movies = data['popularMovies'].results.slice(0, 5);
  return (
    <div className={classes.root}>
      <GridList cols={12} spacing={0} className={classes.gridList}>
        <GridListTile key={1} cols={2} rows={2}>
          <PosterCard movie={movies[0]} />
        </GridListTile>
        <GridListTile key={0} cols={8} rows={2}>
          <img className={classes.gridList} src={movies[0].backdropPath} alt={movies[0].title} />
          <GridListTileBar title={movies[0].title} />
        </GridListTile>
        <GridListTile key={2} cols={1} rows={2}>
          <img className={classes.gridList} src={movies[1].posterPath} alt={movies[1].title} />
        </GridListTile>
        <GridListTile key={3} cols={1} rows={2}>
          <img className={classes.gridList} src={movies[2].posterPath} alt={movies[2].title} />
        </GridListTile>
      </GridList>
    </div>
  );
}

export default function FeaturedMovies() {
  const classes = useStyles();
  const { data, loading } = useQuery(POPULAR_MOVIES_QUERY, { variables });
  return (
    <div>
      {loading && <Loading />}
      {data && renderMovies(data, classes)}
    </div>
  );
}
