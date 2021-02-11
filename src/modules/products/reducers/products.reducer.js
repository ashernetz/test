const initReducer = types => {
  const initialState = {
    products: [],
    filters: [],
    productDescription: {},
    isLoading: false,
    error: {},
    query: '',
    productId: '',
  };

  const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.LOADING_PRODUCTS:
        return {
          ...state,
          isLoading: true,
        };

      case types.LOADING_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: payload.products,
          filters: payload.filters,
          isLoading: false,
        };

      case types.LOADING_PRODUCTS_BY_ID_SUCCESS:
        return {
          ...state,
          productDescription: payload,
          isLoading: false,
        };

      case types.LOADING_PRODUCTS_ERROR:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };

      case types.UPDATE_SEARCH_QUERY:
        return {
          ...state,
          query: payload,
        };

      case types.GET_PRODUCT_DETAILS:
        return state;

      case types.GET_PRODUCTS:
        return state;

      default:
        return state;
    }
  };
  return reducer;
};
export default initReducer;
