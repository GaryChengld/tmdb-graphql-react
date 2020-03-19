import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Settings } from 'react-slick';

import { MovieCarousel } from '../../components';
import FeaturedMovies from './FeaturedMovies';
import { MoviesProps } from './HomePage';
import useStyles from './styles';

const settings: Settings = {
  adaptiveHeight: false,
  variableWidth: false,
  centerMode: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function renderMovie(movies: any[], index: number) {
  const feturedMovies: any[3] = [];
  feturedMovies.push(movies[index]);
  if (index > 0) {
    feturedMovies.push(movies[index - 1]);
  } else {
    feturedMovies.push(movies[movies.length - 1]);
  }
  if (index < movies.length - 1) {
    feturedMovies.push(movies[index + 1]);
  } else {
    feturedMovies.push(movies[0]);
  }
  return <FeaturedMovies key={index} movies={feturedMovies} />;
}

export default function NowPlaying(props: MoviesProps) {
  const classes = useStyles();
  const { movies } = props;
  const moviesWithVideo = movies.filter(m => m.videos.length > 0);
  return (
    <div className={classes.container}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h5" color="inherit">
            <Box fontWeight="fontWeightBold" m={1}>
              In Theaters
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Link variant="body1" component={ReactLink} to="/movie/nowPlaying">
            View more
          </Link>
        </Grid>
      </Grid>
      <MovieCarousel settings={settings}>
        {moviesWithVideo.map((movie: any, index: number) => renderMovie(moviesWithVideo, index))}
      </MovieCarousel>
    </div>
  );
}
