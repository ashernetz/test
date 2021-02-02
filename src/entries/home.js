import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

const app = document.getElementById('home-container');
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app,
);
