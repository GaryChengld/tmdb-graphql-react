import React from 'react';
import { Dialog, DialogTitle, DialogContent, Card, CardMedia, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Theme, makeStyles } from '@material-ui/core/styles';

export interface VideoPlayerProps {
  title: string;
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
    paddingTop: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      height: 405,
      width: 720,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      height: 576,
      width: 1024,
    },
  },
}));

function VidepPlayer(props: VideoPlayerProps) {
  const { title, videoKey, open, onClose } = props;
  const classes = useStyles();
  const trailerUrl = `https://www.youtube.com/embed/${videoKey}?autoplay=1&autohide=2&modestbranding=1&fs=1&autohide=1&`;

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
      maxWidth={'xl'}
      aria-labelledby="Video Player"
      open={open}
    >
      <DialogTitle disableTypography className={classes.root}>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            component="iframe"
            src={trailerUrl}
            frameBorder={0}
            allowFullScreen
            allow="autoplay; encrypted-media"
          />
        </Card>
      </DialogContent>
    </Dialog>
  );
}

export default VidepPlayer;
