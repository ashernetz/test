import actionCreator from 'action-creator-redux';
import Swal from 'sweetalert2';

const initActions = (types, { productsService }) => {
  const loadingProducts = actionCreator(types.LOADING_PRODUCTS);
  const loadingProductsSuccess = actionCreator(types.LOADING_PRODUCTS_SUCCESS);
  const loadingProductsError = actionCreator(types.LOADING_PRODUCTS_ERROR);
  const updateSearchQueryAction = actionCreator(types.UPDATE_SEARCH_QUERY);
  const loadingProductByIdSuccess = actionCreator(
    types.LOADING_PRODUCTS_BY_ID_SUCCESS,
  );

  const getProducts = (query, maxItems = types.MAX_PRODUCTS_SEARCH ) => async dispatch => {
    dispatch(loadingProducts());
    try {
      await productsService.getProducts(query, maxItems).then(response => {
        const payload = {
          breadCrums: productsService.breadCrumsFilters(response.data.filters),
          products: response.data.results,
          filters: response.data.available_filters,
        };
        dispatch(loadingProductsSuccess(payload));
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
      dispatch(loadingProductsError(error.message));
    }
  };

  const getProductById = id => async dispatch => {
    dispatch(loadingProducts());

    try {
      await productsService.getProductById(id).then(response => {
        const payload = {
          name: response.data.title,
          pictures: productsService.formatGalleryImages(response.data.pictures),
          sold_quantity: response.data.sold_quantity,
          condition: response.data.condition,
          quantity: response.data.available_quantity,
          price: response.data.price,
        };
        dispatch(loadingProductByIdSuccess(payload));
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK',
      });
      dispatch(loadingProductsError(error.message));
    }
  };

  const updateSearchQuery = query => dispatch => {
    dispatch(updateSearchQueryAction(query));
  };

  return {
    getProducts,
    getProductById,
    updateSearchQuery,
  };
};
export default initActions;

//export const productById = (id, history) => dispatch => {dispatch(getProductById(id, history)); };
