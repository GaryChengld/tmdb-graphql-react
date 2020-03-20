import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core/';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import { SimpleMovieCard } from '../../components';

interface PaginationProps {
  page: number;
  totalPages: number;
  movies: any[];
  onPageChange: (page: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  pagination: {
    flexGrow: 1,
    justifyContent: 'center',
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function MoviePagination(props: PaginationProps) {
  const { page, totalPages, movies, onPageChange } = props;
  const classes = useStyles();
  const handleChange = (event: any, value: number) => {
    onPageChange(value);
  };

  return (
    <>
      <Grid container spacing={2} justify="flex-start">
        {movies.map((movie: any) => (
          <Grid item key={movie.id} xs={6} md={3} lg={2}>
            <SimpleMovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.pagination}>
        <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
          <Pagination
            count={totalPages}
            defaultPage={page}
            siblingCount={2}
            shape="rounded"
            size="large"
            onChange={handleChange}
          />
        </Box>
      </div>
    </>
  );
}
