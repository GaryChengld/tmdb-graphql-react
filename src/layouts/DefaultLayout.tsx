import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar, Footer } from '../components';
import Routes from '../Routes';

export default function DefaultLayout() {
  return (
    <Router>
      <NavBar />
      <Routes />
      <Footer />
    </Router>
  );
}
