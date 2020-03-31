import React, { useState } from 'react';
import { Card, CardMedia, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { VideoPlayer } from '../';
import { MovieCardProps } from './';
import * as utils from '../../CommonUtils';

const useStyle = makeStyles(theme => ({
  card: {
    position: 'relative',
    height: '100%',
    display: 'flex',
  },
  cardMedia: {
    paddingTop: theme.spacing(0),
  },
  botton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    '-ms-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
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
  const {
    movie,
    movie: { trailer },
  } = props;
  const trailerThumbnail = utils.getTrailerThumbnail(trailer.key);

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} component="img" image={trailerThumbnail} title={movie.title} />
        <IconButton aria-label="play" className={classes.botton} onClick={() => setOpen(true)}>
          <PlayCircleOutlineIcon className={classes.icon} />
        </IconButton>
      </Card>
      {open && <VideoPlayer title={trailer.name} videoKey={trailer.key} open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
