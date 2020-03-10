import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  carousel: {
    width: '85%',
    height: '100%',
    margin: 'auto'
  },
  slider: {
    '& .slick-slide': {
      padding: theme.spacing(1),
    },
  },
}));
