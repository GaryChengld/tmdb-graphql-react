import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, GridList, Grid, GridListTile, Link, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface MovieProps {
  movie: any;
}

interface ImagesProps {
  smallImages: string[];
  images: string[];
  title: string;
  height: number;
  cols: number;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(3),
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
  },
  container: {
    paddingBottom: theme.spacing(2),
  },
}));

function Imagelist(props: ImagesProps) {
  const { smallImages, images, title, height, cols } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={classes.header}>
            <Typography variant="h5" color="inherit" component="span">
              {title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <div className={classes.gridListContainer}>
              <GridList cols={cols} cellHeight={height} spacing={2} className={classes.gridList}>
                {smallImages.map((posterPath: string, index: number) => (
                  <GridListTile key={posterPath}>
                    <Link href={images[index]} target="_blank" rel="noopener">
                      <img className={classes.img} src={posterPath} />
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

export default function Images(props: MovieProps) {
  const classes = useStyles();
  const {
    movie: { smallImages, images },
  } = props;

  return (
    <div className={classes.container}>
      {smallImages.posters.length > 0 && (
        <Imagelist smallImages={smallImages.posters} images={images.posters} height={140} title="Posters" cols={10.5} />
      )}
      {smallImages.backdrops.length > 0 && (
        <Imagelist
          smallImages={smallImages.backdrops}
          images={images.backdrops}
          height={140}
          title="Backdrops"
          cols={3.5}
        />
      )}
    </div>
  );
}
