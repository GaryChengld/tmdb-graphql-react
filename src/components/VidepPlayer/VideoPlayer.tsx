import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Card, CardMedia, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Theme, makeStyles } from '@material-ui/core/styles';

export interface VideoPlayerProps {
  movie: any;
  videoKey: any;
  open: boolean;
  onClose?: (value?: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
  },
  dialogContent: {
    margin: 0,
    padding: theme.spacing(0),
  },
  card: {
    display: 'flex',
  },
  cardMedia: {
    height: 540,
    width: 960,
    paddingTop: theme.spacing(0),
  },
}));

function VidepPlayer(props: VideoPlayerProps) {
  const { movie, videoKey, open, onClose } = props;
  const classes = useStyles();
  const trailerUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1&iv_load_policy=3&rel=0`;

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog
      className={classes.root}
      disableBackdropClick
      disableEscapeKeyDown
      fullWidth={true}
      maxWidth={'md'}
      aria-labelledby="Video Player"
      open={open}
    >
      <DialogTitle disableTypography className={classes.root}>
        <Typography variant="h6" color="inherit">
          {movie.title}
        </Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} component="iframe" src={trailerUrl} frameBorder={0} />
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default VidepPlayer;
