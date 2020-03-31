import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Box, Grid, Link, Typography, Card, CardContent, CardMedia, IconButton } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { VideoPlayer } from '../../components';
import * as utils from '../../CommonUtils';

interface VideosProps {
  movieId: number;
  videos: any[];
}

interface VideoProps {
  video: any;
  onPlay: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    padding: theme.spacing(1),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
  },
  header: {
    marginLeft: theme.spacing(0),
  },
  title: {
    fontWeight: 'bold',
  },
  card: {
    width: 240,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'all 0.4s',
    },
  },
  cardImage: {
    position: 'relative',
  },
  cardMedia: {
    height: 135,
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  botton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  icon: {
    fontSize: 48,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}));

function Video(props: VideoProps) {
  const { video, onPlay } = props;
  const classes = useStyles();
  const trailerThumbnail = utils.getTrailerThumbnail(video.key);
  return (
    <Card className={classes.card} raised>
      <div className={classes.cardImage}>
        <CardMedia className={classes.cardMedia} component="img" image={trailerThumbnail} alt={''} title={video.name} />
        <IconButton aria-label="play" className={classes.botton} onClick={() => onPlay()}>
          <PlayCircleOutlineIcon className={classes.icon} />
        </IconButton>
      </div>
    </Card>
  );
}

export default function Videos(props: VideosProps) {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ name: '', key: '' });
  const { movieId, videos } = props;
  const classes = useStyles();
  const displayVideos = videos.slice(0, 4);
  const playVideo = (video: any) => {
    setOpenVideo(true);
    setCurrentVideo(video);
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box className={classes.header}>
            <Typography variant="h5" color="inherit" component="span">
              Videos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {displayVideos.map((video: any) => (
              <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
                <Video video={video} onPlay={() => playVideo(video)} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {videos.length > displayVideos.length && (
          <Grid item xs={12}>
            <Link component={ReactLink} to={utils.getMovieCastPath(movieId)} variant="body1" underline="none">
              All videos...
            </Link>
          </Grid>
        )}
      </Grid>
      {openVideo && currentVideo && (
        <VideoPlayer
          title={currentVideo.name}
          videoKey={currentVideo.key}
          open={openVideo}
          onClose={() => setOpenVideo(false)}
        />
      )}
    </div>
  );
}
