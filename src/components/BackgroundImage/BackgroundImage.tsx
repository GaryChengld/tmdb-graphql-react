import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type BackgroundImageProps = {
  imagePath?: string;
};

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    'z-index': 1,
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: 'auto',
    opacity: '0.3',
    'z-index': -1,
  },
}));

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imagePath, children }) => {
  const classes = useStyles();
  /*
  const styles = {
    backgroundImage: `url('${imagePath}')`,
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  };
  */
  return (
    <>
      {imagePath && <img className={classes.image} src={imagePath} />}
      <div className={classes.root}>{children}</div>
    </>
  );
};

export default BackgroundImage;
