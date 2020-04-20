import { Typography } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

interface PersonProps {
  person: any;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(0),
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

export default function PersonProfile(props: PersonProps) {
  const { person } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.name} variant="h4" component="span">
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
    </div>
  );
}
