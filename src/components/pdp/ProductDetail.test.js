import React from 'react';
import ProductDetail from './pdpComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import checkPropTypes from 'check-prop-types';
import { checkProps, findByTestAttr } from '../../testing/testUtils';

Enzyme.configure({ adapter: new Adapter() });

const expectedProps = {
  productDescription: {
    id: 'MLA883228690',
    title: 'Monitor Curvo Samsung C24f390fh Led 24  Negro 100v/240v',
    available_quantity: 500,
    sold_quantity: 20,
    condition: 'new',
    price: 22999,
    pictures: [
      {
        original:
          'http://http2.mlstatic.com/D_975053-MLA32072674797_092019-O.jpg',
        thumbnail:
          'http://http2.mlstatic.com/D_975053-MLA32072674797_092019-O.jpg',
      },
      {
        original:
          'http://http2.mlstatic.com/D_809811-MLA32072929125_092019-O.jpg',
        thumbnail:
          'http://http2.mlstatic.com/D_809811-MLA32072929125_092019-O.jpg',
      },
    ],
  },
};

const setup = (props = {}) => {
  return shallow(<ProductDetail {...props} />);
};

test('Render the product details component', () => {
  const wrapper = setup(expectedProps);
  const ProductDetail = findByTestAttr(wrapper, 'component-product-details');
  expect(ProductDetail.length).toBe(1);
});

test('the component have the expected props', () => {
  checkProps(ProductDetail, expectedProps);
});
