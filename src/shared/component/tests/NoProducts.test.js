import React from 'react';
import NoProducts from '../NoProducts';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import checkPropTypes from 'check-prop-types';
import {checkProps, findByTestAttr} from '../../../testing/testUtils';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<NoProducts {...props} />);
};

test('Render the header component', () => {
  const wrapper = setup();
  const NoProducts = findByTestAttr(wrapper, 'component-no-products');
  expect(NoProducts.length).toBe(1);
});

test('the component have the expected props', () => {
  const expectedProps = {
    query: 'something',
  };

  checkProps(NoProducts, expectedProps);
});
