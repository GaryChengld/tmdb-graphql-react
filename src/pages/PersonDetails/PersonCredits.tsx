import React, { useState } from 'react';
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

interface CreditsProps {
  header: string;
  credits: any;
  cast: boolean;
  expanded: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    width: '100%',
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

function Credits(props: CreditsProps) {
  const classes = useStyles();
  const { expanded, credits, header, cast } = props;
  const [expand, setExpand] = useState(expanded);
  return (
    <ExpansionPanel className={classes.panel} expanded={expand} onChange={() => setExpand(!expand)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panelActing-content"
        id="panelActing-header"
      >
        <Typography className={classes.heading}>{header}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {credits.map((credit: any) => (
              <Grid container key={credit.id} direction="row" alignItems="center" spacing={2}>
                <Grid item xs={11}>
                  <Link
                    component={ReactLink}
                    to={utils.getMovieDetailPath(credit.id)}
                    variant="body1"
                    color="textPrimary"
                    underline="none"
                  >
                    {credit.title}
                  </Link>
                  <Typography variant="body1" color="textSecondary">
                    {cast ? credit.character : credit.job}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="body1" component="span">
                    {credit.releaseYear}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default function PersonCredits(props: PersonCreditsProps) {
  const { person } = props;
  const classes = useStyles();
  const {
    knownForDepartment,
    movieCredits: { casts, crewGroups },
  } = person;

  return (
    <>
      <div className={classes.root}>
        {casts && casts.length > 0 && (
          <Credits
            credits={casts}
            expanded={knownForDepartment === 'Acting'}
            cast={knownForDepartment === 'Acting'}
            header="Acting"
          />
        )}
        {crewGroups.map((g: any) => (
          <Credits
            key={g.department}
            header={g.department}
            credits={g.crews}
            cast={knownForDepartment !== 'Acting'}
            expanded={knownForDepartment === g.department}
          />
        ))}
      </div>
    </>
  );
}
