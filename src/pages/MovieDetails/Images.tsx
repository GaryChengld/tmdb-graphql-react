import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, GridList, Grid, GridListTile, Link, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { ImageSearch } from '@material-ui/icons';

interface MovieProps {
  movie: any;
}

interface imagesProps {
  smallImages: string[];
  images: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  header: {
    marginLeft: theme.spacing(1),
  },
  gridListContainer: {
    width: 1000,
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
  }
}));

function Posters(props: imagesProps) {
  const { smallImages, images } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={classes.header}>
            <Typography variant="h5" color="inherit" component="span">
              Posters
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <div className={classes.gridListContainer}>
              <GridList cols={7.5} cellHeight={200} spacing={2} className={classes.gridList}>
                {smallImages.map((posterPath: string) => (
                  <GridListTile key={posterPath}>
                    <img className={classes.img} src={posterPath} />
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

export default function Images(props: MovieProps) {
  const {
    movie: { smallImages, images },
  } = props;

  return <>{smallImages.posters.length > 0 && <Posters smallImages={smallImages.posters} images={images.posters} />}</>;
}
