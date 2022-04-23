import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppTheme from './AppTheme';
import Layout from './components/Layout';
import Routes from './components/library/Routes';

function App() {
  return (
    <BrowserRouter>
      <AppTheme />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
