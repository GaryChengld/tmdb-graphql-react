import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavBar, Footer, Sidebar } from '../components';
import Routes from '../Routes';

export default function DefaultLayout() {
  const [sidebar, setSidebar] = useState(false);
  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);
  return (
    <Router>
      <NavBar onClickMenu={openSidebar} />
      <Sidebar open={sidebar} onClose={closeSidebar} />
      <Routes />
      <Footer />
    </Router>
  );
}
