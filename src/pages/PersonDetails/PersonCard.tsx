import React from 'react';
import { Card, CardMedia } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface PersonProps {
  person: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'transparent',
    borderRadius: 0,
    boxShadow: 'none',
    paddingTop: theme.spacing(0),
  },
  cardMedia: {
    width: 300,
    height: 450,
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(0),
  },
}));

export default function PersonCard(props: PersonProps) {
  const { person } = props;
  const classes = useStyles();
  const imagePath = person.profilePath ? person.profilePath : '/not_found.png';
  return (
    <>
      <Card className={classes.root}>
        <CardMedia className={classes.cardMedia} component="img" image={imagePath} />
      </Card>
    </>
  );
}
