import moxios from 'moxios';
import axios from 'axios';
import { storeFactory } from 'testing/testUtils';
import types from 'modules/products/actions/productsTypes';
import initActions from 'modules/products/actions/products.actions';

const productsResponse = {
  results: [
    {
      id: 'MLA883228690',
      title: 'Monitor Curvo Samsung C24f390fh Led 24 Negro 100v/240v',
      price: 22999,
      address: { state_name: 'Capital Federal' },
      thumbnail:
        'http://http2.mlstatic.com/D_975053-MLA32072674797_092019-I.jpg',
    },
  ],
  available_filters: [
    {
      name: 'Categories',
      values: [
        { id: 'MLA3502', name: 'Accesorios para Celulares', results: 37 },
        { id: 'MLA2141', name: 'Impresión', results: 18 },
      ],
    },
  ],
};

const productDetailResponse = {
  id: 'MLA883228690',
  title: 'Monitor Curvo Samsung C24f390fh Led 24  Negro 100v/240v',
  available_quantity: 500,
  sold_quantity: 20,
  condition: 'new',
  price: 22999,
  pictures: [
    {
      url: 'http://http2.mlstatic.com/D_975053-MLA32072674797_092019-O.jpg',
    },
    { url: 'http://http2.mlstatic.com/D_809811-MLA32072929125_092019-O.jpg' },
  ],
};

const services = {
  productsService: {
    getProducts: query => {
      return axios.get(
        `${types.MELI_URL}${types.MELI_PRODUCTS_SEARCH}${query}&limit=4`,
      );
    },

    getProductById: id => {
      return axios.get(`${types.MELI_URL}${types.MELI_SINGLE_SEARCH}${id}`);
    },
    formatGalleryImages: data => {
      const images = [
        {
          url: 'http://http2.mlstatic.com/D_975053-MLA32072674797_092019-O.jpg',
        },
        {
          url: 'http://http2.mlstatic.com/D_809811-MLA32072929125_092019-O.jpg',
        },
      ];

      return images;
    },

    breadCrumsFilters: filters => {
      return [];
    },
  },
};

describe('test action creators', () => {
  const actions = initActions(types, services);
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('get a list of products', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: productsResponse,
      });
    });
    return store.dispatch(actions.getProducts('samsung')).then(() => {
      const newState = store.getState();
      expect(newState.products.length).toBe(1);
      expect(newState.filters.length).toBe(1);
    });
  });

  test('get details of a product', () => {
    const store = storeFactory();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: productDetailResponse,
      });
    });

    return store.dispatch(actions.getProductById('MLA883228690')).then(data => {
      const newState = store.getState();
      expect(newState.productDescription.quantity).toBe(500);
    });
  });
});
