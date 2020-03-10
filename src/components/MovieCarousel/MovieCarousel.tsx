import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';

import useStyles from './styles';

const settings = {
  centerMode: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
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

export const MovieCarousel: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Slider {...settings} className={classes.slider}>
      {children}
    </Slider>
  );
};
