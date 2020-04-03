import React, { useState } from 'react';
import { Box, Grid, Typography, Card, GridList, GridListTile, CardMedia, IconButton } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { VideoPlayer } from '../../components';
import * as utils from '../../CommonUtils';

interface VideosProps {
  videos: any[];
}

interface VideoProps {
  video: any;
  onPlay: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    display: 'flex',
    backgroundColor: 'transparent',
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
  card: {
    width: 240,
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
      <CardMedia className={classes.cardMedia} component="img" image={trailerThumbnail} alt={''} title={video.name} />
      <IconButton aria-label="play" className={classes.botton} onClick={() => onPlay()}>
        <PlayCircleOutlineIcon className={classes.icon} />
      </IconButton>
    </Card>
  );
}

export default function Videos(props: VideosProps) {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ name: '', key: '' });
  const { videos } = props;
  const classes = useStyles();
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
          <div className={classes.gridListContainer}>
            <GridList cols={4} cellHeight={135} spacing={2} className={classes.gridList}>
              {videos.map((video: any) => (
                <GridListTile key={video.id}>
                  <Video video={video} onPlay={() => playVideo(video)} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </Grid>
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
