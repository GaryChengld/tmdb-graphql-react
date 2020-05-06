import React from 'react';
import {Link, Typography, ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface PersonCreditsProps {
  person: any;
}

interface CastsProps {
  casts: any;
  expanded: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  label: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0),
  },
  text: {
    marginTop: theme.spacing(0),
  },
}));

function Casts(props: CastsProps) {
  return <></>;
}

export default function PersonCredits(props: PersonCreditsProps) {
  const { person } = props;
  const {
    knownForDepartment,
    movieCredits: { casts, crewGroups },
  } = person;
  if (knownForDepartment === 'Acting') {
    return (
      <>
        <Casts casts={casts} expanded={true} />
      </>
    );
  } else {
    return <></>;
  }
}
