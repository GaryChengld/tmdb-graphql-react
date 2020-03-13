import React from 'react';
import Slider, { Settings } from 'react-slick';
import classnames from 'classnames';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import useStyles from './styles';

type CarouselProps = {
  settings?: Settings;
};

function NextArrow(props: any) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.arrow, 'nextArrow')} onClick={onClick}>
      <ArrowForwardIos color="inherit" fontSize="large" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div className={classnames(classes.arrow, 'prevArrow')} onClick={onClick}>
      <ArrowBackIos color="inherit" fontSize="large" />
    </div>
  );
}

export const MovieCarousel: React.FC<CarouselProps> = ({ settings, children }) => {
  const classes = useStyles();
  let carouselSetting: Settings = {
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  if (settings) {
    carouselSetting = { ...carouselSetting, ...settings };
  }
  return (
    <div className={classes.carousel}>
      <Slider {...carouselSetting} className={classes.slider}>
        {children}
      </Slider>
    </div>
  );
};
