import { Typography } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import * as utils from '../../CommonUtils';

interface PersonProps {
  person: any;
}

interface LabelTextProps {
  label: string;
  content: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'transparent',
    paddingTop: theme.spacing(2),
  },
  label: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  text: {
    marginTop: theme.spacing(0),
  },
}));

function LabelText(props: LabelTextProps) {
  const classes = useStyles();
  const { label, content } = props;
  return (
    <>
      <Typography className={classes.label} gutterBottom variant="h6">
        {label}
      </Typography>
      <Typography className={classes.text} variant="body1" color="textSecondary">
        {content}
      </Typography>
    </>
  );
}

export default function PersonInfo(props: PersonProps) {
  const { person } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {person.knownForDepartment && <LabelText label="Known For" content={person.knownForDepartment} />}
      {person.placeOfBirth && <LabelText label="Place of Birth" content={person.placeOfBirth} />}
      {person.birthday && <LabelText label="Birthday" content={utils.formatDate(person.birthday)} />}
      {person.deathday && <LabelText label="Date of Death" content={utils.formatDate(person.deathday)} />}
    </div>
  );
}
