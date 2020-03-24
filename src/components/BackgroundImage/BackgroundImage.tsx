import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type BackgroundImageProps = {
  imagePath?: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imagePath, children }) => {
  const usestyles = makeStyles(() => ({
    background: {
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      backgroundImage: `url('${imagePath}')`,
      backgroundColor: 'rgba(32, 32, 32, 0.8)',
      backgroundBlendMode: 'color',
    },
  }));
  const classes = usestyles();
  if (imagePath) {
    return <div className={classes.background}> {children}</div>;
  } else {
    return <div>{children}</div>;
  }
};

export default BackgroundImage;
