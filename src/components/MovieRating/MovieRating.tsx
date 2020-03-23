import React from 'react';
import { Rating } from '@material-ui/lab';

type MovieRateProps = {
  rate: number;
};

export default function MovieRate(props: MovieRateProps) {
  const { rate } = props;
  return <Rating {...props} name="movieRate" value={rate / 2} precision={0.5} readOnly />;
}
