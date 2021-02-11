import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

const configureStore = reducers => {
  const rootReducer = combineReducers(reducers);
  const middleware = compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
  return createStore(rootReducer, middleware);
};

export default configureStore;
