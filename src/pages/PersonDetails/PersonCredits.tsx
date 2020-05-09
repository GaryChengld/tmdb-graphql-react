import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Link,
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme } from '@material-ui/core/styles';

import * as utils from '../../CommonUtils';

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
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    width: '100%',
    display: 'flex',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  panel: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: 'bold',
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  grid: {
    width: '100%',
  },
}));

function Casts(props: CastsProps) {
  const classes = useStyles();
  const { expanded, casts } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded} className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className={classes.heading}>Acting</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {casts.map((cast: any) => (
                <Grid container key={cast.id} direction="row" alignItems="center" spacing={2}>
                  <Grid item xs={8}>
                    <Link
                      component={ReactLink}
                      to={utils.getMovieDetailPath(cast.id)}
                      variant="body1"
                      color="textPrimary"
                      underline="none"
                    >
                      {cast.title}
                    </Link>
                    <Typography variant="body1" color="textSecondary">
                      {cast.character}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" component="span">
                      {cast.releaseYear}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
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
