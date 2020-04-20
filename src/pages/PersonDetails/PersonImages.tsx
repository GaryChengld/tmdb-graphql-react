import React from 'react';
import { Box, GridList, Grid, GridListTile, Link, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface PersonProps {
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
  gridListContainer: {
    width: 980,
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    imgFullWidth: true,
  },
  img: {
    width: 'auto',
    maxWidth: '100%',
    height: 'auto',
  },
}));

export default function PersonImages(props: PersonProps) {
  const classes = useStyles();
  const {
    person: { images },
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h5" color="inherit" component="span">
              Photos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <div className={classes.gridListContainer}>
              <GridList cols={6.5} cellHeight={225} spacing={8} className={classes.gridList}>
                {images.profiles.map((profile: string) => (
                  <GridListTile key={profile}>
                    <Link href={profile} target="_blank" rel="noopener">
                      <img className={classes.img} src={profile} alt="" />
                    </Link>
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
