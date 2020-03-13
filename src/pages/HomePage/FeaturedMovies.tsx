import React from 'react';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
          <PosterCard movie={movies[1]} />
        </GridListTile>
        <GridListTile key={3} cols={1} rows={2}>
          <PosterCard movie={movies[2]} />
        </GridListTile>
      </GridList>
    </div>
  );
}

export default function FeaturedMovies() {
  const classes = useStyles();
  const variables = {
    region: process.env.REACT_APP_REGION,
  };
  const { data, loading } = useQuery(POPULAR_MOVIES_QUERY, { variables });
  return (
    <div>
      {loading && <Loading />}
      {data && renderMovies(data, classes)}
    </div>
  );
}
