import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface SidebarProps {
  open: boolean;
  onClose?: () => void;
}

const sidebarWidth = 240;

const useStyles = makeStyles({
  drawerPaper: {
    width: sidebarWidth,
  },
  list: {
    width: sidebarWidth,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Sidebar(props: SidebarProps) {
  const { open, onClose } = props;
  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={open}
      onClose={onClose} >
    </Drawer>
  );
}
