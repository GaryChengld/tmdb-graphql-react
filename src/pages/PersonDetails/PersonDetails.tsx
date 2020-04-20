import React from 'react';
import { RouteComponentProps } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { Container, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import { Loading } from '../../components';
import * as queries from '../../Queries';
import PersonCard from './PersonCard';
import PersonProfile from './PersonProfile';
import PersonInfo from './PersonInfo';
import PersonImages from './PersonImages';

interface PathParams {
  id: string;
}

interface PersonProps {
  person: any;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgba(60,60,60,0.6)',
    backgroundBlendMode: 'color',
  },
  container: {
    paddingTop: 40,
    paddingBottom: 40,
  },
}));

function PersonView(props: PersonProps) {
  const { person } = props;
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="lg">
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <PersonCard person={person} />
          <PersonInfo person={person} />
        </Grid>
        <Grid item xs={9}>
          <PersonProfile person={person} />
          {person.images.profiles.length > 1 && <PersonImages person={person} />}
        </Grid>
      </Grid>
    </Container>
  );
}
export default function PersonDetails(props: RouteComponentProps<PathParams>) {
  const id = props.match.params.id;
  const variables = { id: parseInt(id) };
  const fetchPolicy = 'cache-and-network';
  const { data, loading } = useQuery(queries.personQuery, { variables, fetchPolicy });

  return (
    <>
      {loading && <Loading />}
      {data && <PersonView person={data.person} />}
    </>
  );
}
