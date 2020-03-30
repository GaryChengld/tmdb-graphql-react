import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface CastsProps {
  casts: any[];
}

interface CastProps {
  cast: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
  },
  header: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 'bold',
  },
  card: {
    width: 138,
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
  name: {
    fontWeight: 'bold',
  },
}));

function Cast(props: CastProps) {
  const { cast } = props;
  const classes = useStyles();
  const imageUrl = cast.profilePath ? cast.profilePath : '/not_found.png';
  return (
    <Card className={classes.card} raised>
      <CardMedia className={classes.cardMedia} component="img" image={imageUrl} alt={''} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} align="center" variant="subtitle1">
          {cast.name}
        </Typography>
        <Typography align="center" variant="body1" color="textSecondary">
          {cast.character}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default function Casts(props: CastsProps) {
  const { casts } = props;
  const classes = useStyles();
  const displayCasts = casts.slice(0, 6);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Box className={classes.header}>
            <Typography variant="h5" color="inherit" component="span">
              Cast
            </Typography>
            {casts.length > displayCasts.length && (
              <Typography variant="subtitle1" color="inherit" component="span">
                &nbsp;&nbsp;(See full cast...)
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {displayCasts.map((cast: any) => (
              <Grid item key={cast.creditId} xs={6} sm={4} md={3} lg={2}>
                <Cast cast={cast} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
