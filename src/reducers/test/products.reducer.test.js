import * as productActions from '../../actions/productsTypes';
import productsReducer from '../products.reducer';

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
  test('returns default initial state', () => {
    const newState = productsReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('Loading products', () => {
    const stateToCompare = { ...initialState, isLoading: true };
    const loadingAction = {...action, type: productActions.LOADING_PRODUCTS};
    const newState = productsReducer(undefined, loadingAction);
    expect(newState).toEqual(stateToCompare);
  });


});
