import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CardActions,
  IconButton,
  Link,
  Tooltip,
} from '@material-ui/core';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { MovieCardProps } from './types';
import { MovieRating, VideoPlayer } from '..';
import * as utils from '../../CommonUtils';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
  },
  cardMedia: {
    width: 120,
    height: '100%',
    paddingTop: theme.spacing(0),
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flex: '1 0 auto',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  header: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  title: {
    marginRight: theme.spacing(1),
  },
  releaseDate: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  clip: {
    marginRight: theme.spacing(0.5),
  },
  controls: {
    paddingLeft: theme.spacing(1),
  },
}));

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function MovieCard(props: MovieCardProps) {
  const [openVideo, setOpenVideo] = useState(false);
  const classes = useStyle();
  const { movie } = props;
  const imageUrl = movie.posterPath ? movie.posterPath : '/not_found.png';
  const video: boolean = movie.videos && movie.videos.length > 0;
  return (
    <>
      <Card className={classes.root}>
        <Link component={ReactLink} to={`/movie/${movie.id}`} underline="none">
          <CardMedia className={classes.cardMedia} component="img" image={imageUrl} title={movie.title} />
        </Link>
        <div className={classes.details}>
          <CardContent className={classes.cardContent}>
            <HtmlTooltip title={movie.overview}>
              <div className={classes.header}>
                <Typography gutterBottom className={classes.title} color="primary" variant="h5" component="span">
                  {movie.title}
                </Typography>
                {(movie.voteAverage || movie.voteAverage === 0) && <MovieRating rate={movie.voteAverage} />}
              </div>
            </HtmlTooltip>
            {movie.releaseDate && (
              <Typography className={classes.releaseDate} variant="subtitle1" component="div">
                {utils.formatDate(movie.releaseDate)}
              </Typography>
            )}
            {movie.genres.map((g: any) => (
              <Chip key={g.name} className={classes.clip} size="medium" label={g.name} variant="outlined" />
            ))}
          </CardContent>
          <CardActions className={classes.controls} disableSpacing>
            {video && (
              <HtmlTooltip title="Play trailer">
                <IconButton color="default" onClick={() => setOpenVideo(true)}>
                  <PlayCircleOutlineIcon />
                </IconButton>
              </HtmlTooltip>
            )}
            <Link component={ReactLink} to={`/movie/${movie.id}`} underline="none">
              <HtmlTooltip title="More info...">
                <IconButton color="default">
                  <DescriptionIcon />
                </IconButton>
              </HtmlTooltip>
            </Link>
          </CardActions>
        </div>
      </Card>
      {openVideo && (
        <VideoPlayer
          movie={movie}
          videoKey={movie.videos[0].key}
          open={openVideo}
          onClose={() => setOpenVideo(false)}
        />
      )}
    </>
  );
}
