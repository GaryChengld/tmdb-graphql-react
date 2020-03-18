import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Grid, Typography, Link, GridList, GridListTile } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

import { PosterCard } from '../../components';
import { MoviesProps } from './HomePage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  gridList: {
    imgFullWidth: true,
  },
}));

export default function Popular(props: MoviesProps) {
  const classes = useStyles();
  const { movies } = props;
  const top3 = movies.slice(0, 3);
  const others = movies.slice(3, 15);
  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h5" color="inherit">
            <Box fontWeight="fontWeightBold" m={1}>
              Popular Movies
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Link variant="body1" component={ReactLink} to="/movie/popular">
            View more
          </Link>
        </Grid>
      </Grid>
      <GridList cellHeight={152} cols={12} spacing={0} className={classes.gridList}>
        {top3.map((movie: any) => (
          <GridListTile key={movie.id} cols={2} rows={2}>
            <PosterCard movie={movie} />
          </GridListTile>
        ))}
        <GridListTile key={'others'} cols={6} rows={2}>
          <GridList cellHeight={152} cols={6} spacing={0} className={classes.gridList}>
            {others.map((movie: any) => (
              <GridListTile key={movie.id} cols={1} rows={1}>
                <PosterCard movie={movie} />
              </GridListTile>
            ))}
          </GridList>
        </GridListTile>
      </GridList>
    </div>
  );
}
