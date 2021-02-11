import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from '../main/main';

const root = ({ store }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default root;
