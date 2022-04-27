import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Provider, { Consumer } from './AppProvider';
import AppTheme from './AppTheme';
import Layout from './components/Layout';
import Routes from './components/library/Routes';

function App() {
  return (
    <Provider>
      <Consumer>
        {
          () => (
            <BrowserRouter>
              <ToastContainer />
              <AppTheme />
              <Layout>
                <Routes />
              </Layout>
            </BrowserRouter>
          )
        }
      </Consumer>
    </Provider>
  );
}

export default App;
