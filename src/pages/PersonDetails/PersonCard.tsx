import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface PersonProps {
  person: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    height: 450,
    display: 'flex',
    backgroundColor: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    paddingTop: theme.spacing(0),
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
  cardDetails: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  cardContent: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
  },
  name: {
    fontWeight: 'bold',
  },
  biographyLabel: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(0),
    fontWeight: 'bold',
  },
  biographyText: {
    marginTop: theme.spacing(2),
  },
  text: {
    marginTop: theme.spacing(0),
  },
}));

export default function PersonCard(props: PersonProps) {
  const { person } = props;
  const classes = useStyles();
  const imagePath = person.profilePath ? person.profilePath : '/not_found.png';
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.cardImage}>
          <CardMedia className={classes.cardMedia} component="img" image={imagePath} />
        </div>
        <div className={classes.cardDetails}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.name} variant="h4">
              {person.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {person.alsoKnownAs
                .filter((n: string) => n !== person.name)
                .map((knowAs: string, index: number) => (
                  <>
                    {index > 0 && <>&nbsp;|&nbsp;</>}
                    {knowAs}
                  </>
                ))}
            </Typography>
            <Typography className={classes.biographyText} gutterBottom variant="subtitle1">
              {person.biography}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </>
  );
}
