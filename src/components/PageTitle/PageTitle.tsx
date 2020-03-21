import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core/';
import { Theme, makeStyles } from '@material-ui/core/styles';

interface PageTitleProps {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export default function PageTitle(props: PageTitleProps) {
  const { title } = props;
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography variant="h5" color="inherit">
            <Box fontWeight="fontWeightBold">{title}</Box>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
