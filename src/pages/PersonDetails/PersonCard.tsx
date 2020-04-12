import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as utils from '../../CommonUtils';

interface PersonProps {
  person: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    paddingTop: theme.spacing(0),
  },
  cardImage: {
    position: 'relative',
  },
  cardMedia: {
    width: 300,
    height: '100%',
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
  playButton: {
    position: 'absolute',
    width: '100%',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  cardDetails: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  releaseYear: {
    marginLeft: theme.spacing(1),
  },
  originalTitle: {
    marginTop: theme.spacing(0),
    fontStyle: 'italic',
  },
  rate: {
    marginTop: theme.spacing(1),
  },
  starIcon: {
    marginTop: theme.spacing(2),
    fontSize: 40,
  },
  genres: {
    marginLeft: theme.spacing(1),
  },
  tagline: {
    marginTop: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontStyle: 'italic',
  },
  label: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  text: {
    marginTop: theme.spacing(0),
  },
  avatar: {
    display: 'flex',
    '& > *': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      margin: theme.spacing(1),
    },
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  writers: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
}));

export default function PersonCard(props: PersonProps) {
  const { person } = props;
  const classes = useStyles();
  return (
    <>
    </>
  );
}
