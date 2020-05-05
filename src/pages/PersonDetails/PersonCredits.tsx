import React from 'react';
import { Box, GridList, Grid, GridListTile, Link, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface PersonCreditsProps {
  person: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  label: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  text: {
    marginTop: theme.spacing(0),
  },
}));

export default function PersonCredits(props: PersonCreditsProps) {
  const { person } = props;
  const classes = useStyles();

  return <></>;
}