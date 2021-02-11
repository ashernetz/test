import initProductActions from './actions/products.actions';
import initReducer from './reducers/products.reducer';
import types from './actions/productsTypes';

const configureProductsModule = services => {
  const actions = initProductActions(types, services);
  const reducer = initReducer(types);
  return { actions, reducer, types };
};

export default configureProductsModule;
