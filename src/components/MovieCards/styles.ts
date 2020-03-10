import { makeStyles } from '@material-ui/core/styles';

export const useDefaultStyle = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.03)',
      transition: 'all 0.4s',
    },
  },
  cardMedia: {
    paddingTop: theme.spacing(0),
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing(0),
  },
}));
