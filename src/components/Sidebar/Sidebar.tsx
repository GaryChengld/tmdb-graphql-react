import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

export interface SidebarProps {
  open: boolean;
  onClose?: () => void;
}

const sidebarWidth = 240;

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: sidebarWidth,
  },
  toolbar: theme.mixins.toolbar,
  list: {
    width: sidebarWidth,
  },
  fullList: {
    width: 'auto',
  },
}));

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
      onClose={onClose}
    >
      <div className={classes.toolbar} />
      <Divider color="inherite" />
    </Drawer>
  );
}
