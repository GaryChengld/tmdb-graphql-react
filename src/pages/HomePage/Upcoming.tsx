import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import { Settings } from 'react-slick';

import { SimpleMovieCard, MovieCarousel } from '../../components';
import { MoviesProps } from './HomePage';

const settings: Settings = {
  centerMode: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 3000,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default function Upcoming(props: MoviesProps) {
  let { movies } = props;
  movies = movies.filter(m => m.posterPath);
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h5" color="inherit">
            <Box fontWeight="fontWeightBold" m={1}>
              Coming Soon
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Link variant="body1" component={ReactLink} to="/movie/upcoming">
            View more
          </Link>
        </Grid>
      </Grid>
      <MovieCarousel settings={settings}>
        {movies.map((movie: any) => (
          <SimpleMovieCard key={movie.id} movie={movie} />
        ))}
      </MovieCarousel>
    </>
  );
}
