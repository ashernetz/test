import types from '../../modules/products/actions/productsTypes';

const ProductsService = httpclient => {
  const getProducts = (query, maxProducts) => {
    const url = decodeURI(
      `${types.MELI_URL}${types.MELI_PRODUCTS_SEARCH}${query}&limit=${maxProducts}`,
    );
    return httpclient.get(url);
  };

  const getProductById = id => {
    return httpclient.get(`${types.MELI_URL}${types.MELI_SINGLE_SEARCH}${id}`);
  };

  const formatGalleryImages = images => {
    const formatedPictures = images.map(image => {
      return { original: image.url, thumbnail: image.url };
    });
    return formatedPictures;
  };

  const breadCrumsFilters = filters => {
    let breadcrums = [];
    if (filters.length > 0) {
      filters.forEach(filterData => {
        filterData.values.forEach(filterValues => {
          if (filterValues.path_from_root) {
            breadcrums = [...breadcrums, ...filterValues.path_from_root];
          }
        });
      });
    }
    return breadcrums;
  };

  return Object.freeze({
    getProducts,
    getProductById,
    formatGalleryImages,
    breadCrumsFilters,
  });
};

export default ProductsService;
