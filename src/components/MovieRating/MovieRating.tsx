import React from 'react';
import { Rating } from '@material-ui/lab';

type MovieRateProps = {
  rate: number;
};

export default function MovieRate(props: MovieRateProps) {
  return <Rating name="movieRate" value={props.rate / 2} precision={0.5} readOnly />;
}
