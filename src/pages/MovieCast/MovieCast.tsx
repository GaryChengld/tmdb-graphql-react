import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { Container, Grid, Card, Link, CardMedia, CardContent, Typography, Box, Avatar } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useQuery } from '@apollo/react-hooks';

import * as queries from '../../Queries';
import { Loading, BackgroundImage, MovieHeaderCard } from '../../components';
import * as utils from '../../CommonUtils';

interface PathParams {
  id: string;
}

interface MovieProps {
  movie: any;
}

interface CreditsProps {
  credits: any[];
}

interface CreditProps {
  credit: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
  },
  container: {
    paddingTop: 200,
    paddingBottom: 40,
  },
  card: {
    marginLeft: theme.spacing(2),
    width: 138,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  cardMedia: {
    height: 175,
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    paddingTop: theme.spacing(0),
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
  title: {
    fontWeight: 'bold',
  },
  header: {
    marginLeft: theme.spacing(2),
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
}));

function Credit(props: CreditProps) {
  const { credit } = props;
  const classes = useStyles();
  const imageUrl = credit.profilePath ? credit.profilePath : '/not_found.png';
  return (
    <Card className={classes.card} raised>
      <Link component={ReactLink} to={utils.getPersonDetailPath(credit.personId)} underline="none">
        <CardMedia className={classes.cardMedia} component="img" image={imageUrl} alt={''} />
      </Link>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} align="center" variant="subtitle1">
          {credit.name}
        </Typography>
        {credit.character && (
          <Typography align="center" variant="body1" color="textSecondary">
            {credit.character}
          </Typography>
        )}
        {credit.job && (
          <Typography align="center" variant="body1" color="textSecondary">
            {credit.job}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

function Casts(props: CreditsProps) {
  const { credits: casts } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className={classes.header}>
          <Typography variant="h5" color="inherit" component="span">
            Casts
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {casts.map((cast: any) => (
            <Grid item key={cast.creditId} xs={12} md={6} lg={4}>
              <Credit credit={cast} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

function Crews(props: CreditsProps) {
  const { credits: crews } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className={classes.header}>
          <Typography variant="h5" color="inherit" component="span">
            Crews
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        {crews.map((crew: any) => (
          <Grid container key={crew.creditId} direction="row" alignItems="center" spacing={2}>
            <Grid item xs={1}>
              <Avatar src={crew.profilePath ? crew.profilePath : 'broken_image'} />
            </Grid>
            <Grid item xs={3}>
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
            <Grid item xs={8}>
              <Typography variant="body1" color="textSecondary" component="span">
                {crew.job}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

function Page(props: MovieProps) {
  const {
    movie,
    movie: { backdropPath },
  } = props;
  const classes = useStyles();
  return (
    <BackgroundImage imagePath={backdropPath}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MovieHeaderCard movie={movie} />
            </Grid>
            <Grid item xs={6}>
              <Casts credits={movie.casts} />
            </Grid>
            <Grid item xs={6}>
              <Crews credits={movie.crews} />
            </Grid>
          </Grid>
        </div>
      </Container>
    </BackgroundImage>
  );
}

export default function MovieCast(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(queries.movieCastQuery, { variables, fetchPolicy });
  if (loading) {
    window.scrollTo(0, 0);
  }
  return (
    <>
      {loading && <Loading />}
      {data && <Page movie={data.movieDetail} />}
    </>
  );
}
