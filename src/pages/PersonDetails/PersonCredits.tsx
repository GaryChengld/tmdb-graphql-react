import React from 'react';
import {Link, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
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
  const classes = useStyles();
  const { expanded } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className={classes.heading}>Acting</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
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
