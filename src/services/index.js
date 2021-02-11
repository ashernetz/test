import ProductsService from './products/products.service';
import axios from 'axios';

const configureProductService = () => {
  return ProductsService(axios);
};

const configureServices = () => {
  const productsService = configureProductService();

  return { productsService };
};

export default configureServices;
