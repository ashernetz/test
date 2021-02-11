import types from '../../modules/products/actions/productsTypes';

const ProductsService = httpclient => {
  const getProducts = (query) => {
    return httpclient.get(
      `${types.MELI_URL}${types.MELI_PRODUCTS_SEARCH}${query}&limit=4`,
    );
  };

  const getProductById = id => {
    return httpclient.get(
        `${types.MELI_URL}${types.MELI_SINGLE_SEARCH}${id}`
    );
  };

  const formatGalleryImages = images => {
    const formatedPictures = images.map(image => {
      return { original: image.url, thumbnail: image.url };
    });
    return formatedPictures;
  };

  return Object.freeze({
    getProducts,
    getProductById,
    formatGalleryImages
  })
};

export default ProductsService;
