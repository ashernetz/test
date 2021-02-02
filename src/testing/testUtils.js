import CheckPropTypes from 'check-prop-types';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 *
 * return node(s) with the given  data-test atrribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - value of the data-test attribute for search
 * @returns {ShallowWrapper}
 * */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {object} props - expected props for the component
 * */

export const checkProps = (component, conformingProps) => {
  const propsError = CheckPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propsError).toBeUndefined();
};

const initialState = {
  data: {},
};

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer, middlewares.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(reduxThunk)),
  );
  return store;
};
