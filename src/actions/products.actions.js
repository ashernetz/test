import * as productActions from './productsTypes';
import axios from 'axios';
import Swal from 'sweetalert2';

export const getProducts = query => async (dispatch, getState) => {
  dispatch({
    type: productActions.LOADING_PRODUCTS,
  });
  try {
    await axios
      .get(
        `${productActions.MELI_URL}${
          productActions.MELI_PRODUCTS_SEARCH
        }${query}&limit=4`,
      )
      .then(response => {
        dispatch({
          type: productActions.LOADING_PRODUCTS_SUCCESS,
          payload: {
            products: response.data.results,
            filters: response.data.available_filters,
          },
        });
      });
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
    dispatch({
      type: productActions.LOADING_PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};

export const getProductById = (id) => async dispatch => {
  dispatch({
    type: productActions.LOADING_PRODUCTS,
  });

  try {
    await axios
      .get(
        `${productActions.MELI_URL}${productActions.MELI_SINGLE_SEARCH}${id}`,
      )
      .then(response => {
        dispatch({
          type: productActions.LOADING_PRODUCTS_BY_ID_SUCCESS,
          payload: {
            name: response.data.title,
            pictures: formatGalleryImages(response.data.pictures),
            sold_quantity: response.data.sold_quantity,
            condition: response.data.condition,
            quantity: response.data.available_quantity,
            price: response.data.price
          },
        });

      });
  } catch (error) {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
    dispatch({
      type: productActions.LOADING_PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};

export const updateSearchQuery = query => dispatch => {
  dispatch({
    type: productActions.UPDATE_SEARCH_QUERY,
    payload: query,
  });
  dispatch(getProducts(query));
};

export const productById = (id, history) => dispatch => {
  dispatch(getProductById(id, history));
};

export const formatGalleryImages = (images)  =>{
  const formatedPictures = images.map(image => {
    return {original: image.url, thumbnail: image.url}
  });
  return formatedPictures;
}
