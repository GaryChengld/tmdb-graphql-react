import React from 'react';
import { NavBar } from '../components';
import Routes from '../Routes';

export default class Page extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes />
      </>
    );
  }
}
