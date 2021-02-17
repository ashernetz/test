import React from 'react';
import Filter from '../components/filter/Filter';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {checkProps, findByTestAttr} from './testUtils';


Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<Filter {...props} />);
};

test('Render the header component', () => {
  const wrapper = shallow(<Filter />);
  const headerComponent = findByTestAttr(wrapper, 'component-filter');
  expect(headerComponent.length).toBe(1);
});

test('the component have the expected props', () => {
  const expectedProps = {
    data: {
      name: 'filter',
      values: [{ name: 'option', values: [{ name: 'filter', results: 1 }] }],
    },
  };

  checkProps(Filter, expectedProps);
});
