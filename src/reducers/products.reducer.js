import * as productActions from '../actions/productsTypes';

const initialState = {
  products: [],
  filters: [],
  productDescription: {},
  isLoading: false,
  error: {},
  query: '',
  productId: '',
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case productActions.LOADING_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };

    case productActions.LOADING_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        filters: action.payload.filters,
        isLoading: false,
      };

    case productActions.LOADING_PRODUCTS_BY_ID_SUCCESS:
      return {
        ...state,
        productDescription: action.payload,
        isLoading: false,
      };

    case productActions.LOADING_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case productActions.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case productActions.GET_PRODUCT_DETAILS:
      return state;

    case productActions.GET_PRODUCTS:
      return state;

    default:
      return state;
  }
}
