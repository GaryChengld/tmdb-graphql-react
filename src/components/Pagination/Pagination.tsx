import React from 'react';
import { Box } from '@material-ui/core/';
import { Theme, makeStyles } from '@material-ui/core/styles';
import MuiPagination from '@material-ui/lab/Pagination';

interface PaginationProps {
  page: number;
  totalPages: number;
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

export default function Pagination(props: PaginationProps) {
  const { page, totalPages, onPageChange } = props;
  const classes = useStyles();
  const handleChange = (event: any, value: number) => {
    onPageChange(value);
  };

  return (
    <div className={classes.pagination}>
      <Box display="flex" alignItems="center" justifyContent="center" mt={2}>
        <MuiPagination
          count={totalPages}
          defaultPage={page}
          siblingCount={2}
          shape="rounded"
          size="large"
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}
