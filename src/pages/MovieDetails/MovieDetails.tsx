import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Grid, Typography, Chip } from '@material-ui/core/';
import { Card, CardContent, CardMedia, Avatar, Tooltip, Button } from '@material-ui/core/';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';
import StarRateIcon from '@material-ui/icons/StarRate';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import * as queries from '../../Queries';
import { Loading, BackgroundImage, VideoPlayer } from '../../components';
import * as utils from '../../CommonUtils';

interface PathParams {
  id: string;
}

interface MovieProps {
  movie: any;
  loading?: boolean;
}

interface LabelTextProps {
  label: string;
  content: string;
}

interface LabelProps {
  label: string;
}

interface CrewAvatarProps {
  crew: any;
}

interface CastAvatarProps {
  cast: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  infoCard: {
    marginTop: 120,
    height: '100%',
    position: 'relative',
    display: 'flex',
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
  },
  cardImage: {
    width: 300,
    height: 480,
    paddingTop: theme.spacing(0),
  },
  cardDetails: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  cardContent: {
    flex: '1 0 auto',
    padding: theme.spacing(2),
  },
  releaseYear: {
    marginLeft: theme.spacing(1),
  },
  starIcon: {
    marginTop: theme.spacing(2),
    fontSize: 40,
  },
  genres: {
    marginRight: theme.spacing(1),
  },
  label: {
    marginTop: theme.spacing(2),
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
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

function getBackdrop(movie: any): string | undefined {
  const {
    images: { backdrops },
  } = movie;

  if (backdrops) {
    return backdrops[Math.floor(Math.random() * backdrops.length)];
  } else {
    return undefined;
  }
}

function MovieDetailInfo(props: MovieProps) {
  const { movie, loading } = props;
  const backdrop = loading ? undefined : getBackdrop(movie);
  const classes = useStyles();
  return (
    <BackgroundImage imagePath={backdrop}>
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <MovieInfoCard movie={movie} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </BackgroundImage>
  );
}

function MovieInfoCard(props: MovieProps) {
  const classes = useStyles();
  const [openVideo, setOpenVideo] = useState(false);
  const { movie } = props;
  const videos = movie.videos.filter((v: any) => v.type === 'Trailer');
  const video: boolean = videos && videos.length > 0;
  const imagePath = movie.posterPath ? movie.posterPath : '/not_found.png';
  const { originalLanguage } = movie;
  const casts = movie.casts.slice(0, 8);
  let language = originalLanguage.englishName;
  if (originalLanguage.englishName !== originalLanguage.name) {
    language = `${originalLanguage.englishName} (${originalLanguage.name})`;
  }
  return (
    <>
      <Card className={classes.infoCard}>
        <CardMedia className={classes.cardImage} component="img" image={imagePath} />
        <div className={classes.cardDetails}>
          <CardContent className={classes.cardContent}>
            <div>
              <Typography gutterBottom variant="h4" component="span">
                {movie.title}
              </Typography>
              <Typography className={classes.releaseYear} variant="h5" component="span" color="textSecondary">
                ({movie.releaseYear})
              </Typography>
            </div>
            <Grid container spacing={4} justify="space-between">
              <Grid item xs={9}>
                <Grid container direction="row" alignItems="center">
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
                </Grid>
                {movie.genres.map((g: any) => (
                  <Chip key={g.name} className={classes.genres} size="medium" label={g.name} variant="outlined" />
                ))}
                {video && (
                  <Button
                    variant="outlined"
                    size="medium"
                    className={classes.button}
                    startIcon={<PlayCircleOutlineIcon />}
                    onClick={() => setOpenVideo(true)}
                  >
                    Play trailer
                  </Button>
                )}
                <LabelText label="Overview" content={movie.overview} />
                <Label label="Director" />
                <div className={classes.avatar}>
                  <Grid container direction="row" alignItems="center" spacing={2}>
                    {movie.director.map((d: any) => (
                      <CrewAvatar key={d.id} crew={d} />
                    ))}
                  </Grid>
                </div>
                <Label label="Stars" />
                <div className={classes.avatar}>
                  <Grid container direction="row" alignItems="center" spacing={2}>
                    {casts.map((c: any) => (
                      <CastAvatar key={c.id} cast={c} />
                    ))}
                  </Grid>
                </div>
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
        {openVideo && (
          <VideoPlayer movie={movie} videoKey={videos[0].key} open={openVideo} onClose={() => setOpenVideo(false)} />
        )}
      </Card>
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

function CrewAvatar(props: CrewAvatarProps) {
  const { crew } = props;
  return (
    <Grid item>
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item>
          <Avatar src={crew.profilePath ? crew.profilePath : 'broken_image'} />
        </Grid>
        <Grid item>
          <Typography variant="body1" color="textSecondary">
            {crew.name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function CastAvatar(props: CastAvatarProps) {
  const { cast } = props;
  return (
    <Grid item>
      <LightTooltip title={cast.name}>
        <Avatar alt={cast.name} src={cast.profilePath ? cast.profilePath : 'broken_image'} />
      </LightTooltip>
    </Grid>
  );
}

export default function MovieDetails(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(queries.movieDetailQuery, { variables, fetchPolicy });
  return (
    <>
      {data && <MovieDetailInfo movie={data.movieDetail} loading={loading} />}
      {!data && loading && <Loading />}
    </>
  );
}
