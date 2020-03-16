import React from 'react';
import {
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardMedia,
} from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

export interface VideoPlayerProps {
  movie: any;
  videoKey: any;
  open: boolean;
  onClose?: (value?: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    hight: '100%',
  },
  dialogContent: {
    width: '100%',
    hight: '100%',
  },
  card: {
    position: 'relative',
    height: '100%',
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
      <DialogContent className={classes.dialogContent}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} component="iframe" src={trailerUrl} frameBorder={0} />
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default VidepPlayer;
