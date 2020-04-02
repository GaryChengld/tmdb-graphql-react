import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { Grid, Link, Typography, Chip, Button } from '@material-ui/core/';
import { Card, CardContent, CardMedia, Avatar } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { VideoPlayer } from '../../components';
import * as utils from '../../CommonUtils';

interface MovieProps {
  movie: any;
}

interface LabelTextProps {
  label: string;
  content: string;
}

interface LabelProps {
  label: string;
}

interface CrewsProps {
  crews: any[];
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(1),
  },
  cardImage: {
    position: 'relative',
  },
  cardMedia: {
    width: 300,
    height: '100%',
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
  playButton: {
    position: 'absolute',
    width: '100%',
    top: '100%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    textTransform: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  cardDetails: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  releaseYear: {
    marginLeft: theme.spacing(1),
  },
  originalTitle: {
    marginTop: theme.spacing(0),
    fontStyle: 'italic',
  },
  rate: {
    marginTop: theme.spacing(1),
  },
  starIcon: {
    marginTop: theme.spacing(2),
    fontSize: 40,
  },
  genres: {
    marginLeft: theme.spacing(1),
  },
  tagline: {
    marginTop: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontStyle: 'italic',
  },
  label: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  text: {
    marginTop: theme.spacing(0),
  },
  avatar: {
    display: 'flex',
    '& > *': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      margin: theme.spacing(1),
    },
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  writers: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(2),
  },
}));

export default function MovieInfo(props: MovieProps) {
  const classes = useStyles();
  const {
    movie,
    movie: { trailer },
  } = props;
  const [openVideo, setOpenVideo] = useState(false);
  const imagePath = movie.posterPath ? movie.posterPath : '/not_found.png';
  const { originalLanguage, originalTitle, title } = movie;
  let language = originalLanguage.englishName;
  if (originalLanguage.englishName !== originalLanguage.name) {
    language = `${originalLanguage.englishName} (${originalLanguage.name})`;
  }
  const showOriginalTitle = originalTitle && originalTitle !== title;
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.cardImage}>
          <CardMedia className={classes.cardMedia} component="img" image={imagePath} />
          {trailer && (
            <Button
              startIcon={<PlayCircleOutlineIcon />}
              variant="contained"
              color="primary"
              size="large"
              className={classes.playButton}
              onClick={() => setOpenVideo(true)}
            >
              Play Trailer
            </Button>
          )}
        </div>
        <div className={classes.cardDetails}>
          <CardContent className={classes.cardContent}>
            <div>
              <Typography gutterBottom variant="h4" component="span">
                {title}
              </Typography>
              <Typography className={classes.releaseYear} variant="h5" component="span" color="textSecondary">
                ({movie.releaseYear})
              </Typography>
              {showOriginalTitle && (
                <Typography className={classes.originalTitle} variant="body1" color="textSecondary">
                  {originalTitle} (original title)
                </Typography>
              )}
            </div>
            <Grid container spacing={4} justify="space-between">
              <Grid item xs={9}>
                <Grid container color="primary" className={classes.rate} direction="row" alignItems="center">
                  <Grid item>
                    <StarRateIcon color="secondary" fontSize="large" />
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" component="span">
                      {movie.voteAverage}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="span">
                      /10
                    </Typography>
                  </Grid>
                  <Grid item>
                    {movie.genres.map((g: any) => (
                      <Chip key={g.name} className={classes.genres} size="medium" label={g.name} variant="outlined" />
                    ))}
                  </Grid>
                </Grid>
                {movie.tagline && (
                  <Typography className={classes.tagline} variant="body1" color="textSecondary">
                    {movie.tagline}
                  </Typography>
                )}
                <LabelText label="Overview" content={movie.overview} />
                <Directors crews={movie.directors} />
                <Writers crews={movie.writers} />
              </Grid>
              <Grid item xs={3}>
                {movie.runtime > 0 && <LabelText label="Running time" content={movie.runtime + ' Minutes'} />}
                {language && <LabelText label="Language" content={language} />}
                <LabelText label="Release Date" content={utils.formatDate(movie.releaseDate)} />
                {movie.revenue > 0 && <LabelText label="Box Office" content={utils.formatMoney(movie.revenue)} />}
                {movie.budget > 0 && <LabelText label="Budget" content={utils.formatMoney(movie.budget)} />}
              </Grid>
            </Grid>
          </CardContent>
        </div>
      </Card>
      {openVideo && (
        <VideoPlayer title={trailer.name} videoKey={trailer.key} open={openVideo} onClose={() => setOpenVideo(false)} />
      )}
    </>
  );
}

function LabelText(props: LabelTextProps) {
  const classes = useStyles();
  const { label, content } = props;
  return (
    <>
      <Label label={label} />
      <Typography className={classes.text} variant="body1" color="textSecondary">
        {content}
      </Typography>
    </>
  );
}

function Label(props: LabelProps) {
  const classes = useStyles();
  const { label } = props;
  return (
    <Typography className={classes.label} gutterBottom variant="h6">
      {label}
    </Typography>
  );
}

function Directors(props: CrewsProps) {
  const classes = useStyles();
  const { crews } = props;
  if (crews && crews.length > 0) {
    const label = crews.length > 1 ? 'Directors' : 'Director';
    return (
      <>
        <Label label={label} />
        <div className={classes.avatar}>
          <Grid container direction="row" alignItems="center" spacing={2}>
            {crews.map((crew: any) => (
              <Grid item key={crew.creditId}>
                <Grid container direction="row" alignItems="center" spacing={1}>
                  <Grid item>
                    <Avatar src={crew.profilePath ? crew.profilePath : 'broken_image'} />
                  </Grid>
                  <Grid item>
                    <Link
                      component={ReactLink}
                      to={utils.getPersonDetailPath(crew.personId)}
                      variant="body1"
                      color="textPrimary"
                      underline="none"
                    >
                      {crew.name}
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

function Writers(props: CrewsProps) {
  const classes = useStyles();
  const { crews } = props;
  if (crews && crews.length > 0) {
    const label = crews.length > 1 ? 'Writers' : 'Writer';
    return (
      <>
        <Label label={label} />
        <div className={classes.writers}>
          {crews.map((crew: any, index: number) => (
            <span key={crew.credit}>
              {index > 0 && <>,&nbsp;&nbsp;</>}
              <Link
                component={ReactLink}
                to={utils.getPersonDetailPath(crew.personId)}
                variant="body1"
                color="textPrimary"
                underline="none"
              >
                {crew.name}
              </Link>
              <Typography variant="body1" color="textSecondary" component="span">
                &nbsp;({crew.job})
              </Typography>
            </span>
          ))}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
