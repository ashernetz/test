import { extractActions, extractReducers } from './extract';
import configureProductsModule from './products/index';

const configureModules =  async (services) => {
  const productsModule = configureProductsModule(services);
  const modules = {
    products: productsModule,
  };

  return {
    actions: extractActions(modules),
    reducers: extractReducers(modules),
  };
};
export default configureModules;
