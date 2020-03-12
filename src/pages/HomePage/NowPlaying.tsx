import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Grid, Typography, Link } from '@material-ui/core';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import { Settings } from 'react-slick';
import { Loading, SimpleMovieCard, MovieCarousel } from '../../components';
import useStyles from './styles';

const NOW_PLAYING_QUERY = gql`
  query nowPlayingMovies($region: String) {
    nowPlayingMovies(page: 1, region: $region) {
      results {
        id
        title
        posterPath(size: L)
        voteAverage
      }
    }
  }
`;

const variables = {
  region: process.env.REACT_APP_REGION,
};

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
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function renderMovies(data: any) {
  const movies = data['nowPlayingMovies'].results.slice(0, 20);
  return (
    <MovieCarousel settings={settings}>
      {movies.map((movie: any) => (
        <SimpleMovieCard key={movie.id} movie={movie} />
      ))}
    </MovieCarousel>
  );
}

function NowPlaying() {
  const classes = useStyles();
  const { data, loading } = useQuery(NOW_PLAYING_QUERY, { variables });
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
      {loading && <Loading />}
      {data && renderMovies(data)}
    </div>
  );
}

export default NowPlaying;
