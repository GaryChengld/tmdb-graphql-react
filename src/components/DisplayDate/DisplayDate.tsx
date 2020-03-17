import React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

export interface DisplayDateProps extends TypographyProps {
  date: string;
}

export default function DisplayDate(props: DisplayDateProps) {
  const { date, ...rest } = props;
  const theDate: Date = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return <Typography {...rest}>{theDate.toLocaleDateString(undefined, options)}</Typography>;
}
