import React, { useState } from 'react';
import { Card, CardMedia, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { VideoPlayer } from '../';
import { MovieCardProps } from './';

const useStyle = makeStyles(theme => ({
  card: {
    position: 'relative',
    height: '100%',
    display: 'flex',
  },
  cardMedia: {
    height: '100%',
    paddingTop: theme.spacing(0),
  },
  overlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 96,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function TrailerCard(props: MovieCardProps) {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  const { movie } = props;
  const trailerThumbnail = `https://img.youtube.com/vi/${movie.videos[0].key}/maxresdefault.jpg`;

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} component="img" image={trailerThumbnail} title={movie.title} />
        <IconButton aria-label="play" className={classes.overlay} onClick={() => setOpen(true)}>
          <PlayCircleOutlineIcon className={classes.icon} />
        </IconButton>
      </Card>
      {open && <VideoPlayer movie={movie} videoKey={movie.videos[0].key} open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
