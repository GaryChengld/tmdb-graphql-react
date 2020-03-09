import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress, Box } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

export default function Loading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box mt={8} mb={8}>
        <CircularProgress size={40} />
      </Box>
    </div>
  );
}
