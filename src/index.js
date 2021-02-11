import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';
import context from './context';
import configureServices from './services';
import configureModules from './modules';
import configureStore from './store';

const loadRoot = async () => {
  const module = await import('./components/root');
  return module.default;
};

const render = async store => {
  const target = document.getElementById('root');
  const Root = await loadRoot();
  ReactDOM.render(<Root store={store} />, target);
};

(async function init() {
  const services = await configureServices();
  const { actions, reducers } = await configureModules(services);
  context.registerServices(services);
  context.registerActions(actions);
  render(configureStore(reducers));
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
