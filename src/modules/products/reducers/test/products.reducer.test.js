import productsReducer from '../products.reducer';
import types from 'modules/products/actions/productsTypes';

const action = { type: 'something', payload: '' };
const initialState = {
  products: [],
  filters: [],
  productDescription: {},
  isLoading: false,
  error: {},
  query: '',
  productId: '',
};


describe('test the products reducer', () => {
  const reducer = productsReducer(types);
  test('returns default initial state', () => {
    const newState = reducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('Loading products', () => {
    const stateToCompare = { ...initialState, isLoading: true };
    const loadingAction = {...action, type: types.LOADING_PRODUCTS};
    const newState = reducer(undefined, loadingAction);
    expect(newState).toEqual(stateToCompare);
  });


});
