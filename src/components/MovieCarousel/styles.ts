import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  slider: {
    '& .slick-slide': {
      padding: theme.spacing(1),
    },
  },
  arrow: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 60,
    width: 20,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    '&.prevArrow': {
      left: 0,
    },
    '&.nextArrow': {
      right: 0,
    },
  },
}));
