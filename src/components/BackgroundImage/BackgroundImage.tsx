import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

type BackgroundImageProps = {
  imagePath?: string;
};

const useStyles = makeStyles(() => ({
  background: {
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundImage: (props: BackgroundImageProps) => `url('${props.imagePath}')`,
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    backgroundBlendMode: 'color',
  },
}));

const BackgroundImage: React.FC<BackgroundImageProps> = ({ children, ...props }) => {
  const classes = useStyles(props);
  const { imagePath } = props;
  if (imagePath) {
    return <div className={classes.background}>{children}</div>;
  } else {
    return <div>{children}</div>;
  }
};

export default BackgroundImage;
