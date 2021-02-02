import React from 'react';
import Header from '../header';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findByTestAttr } from '../../../testing/testUtils';
Enzyme.configure({ adapter: new Adapter() });

test('Render the header component', () => {
  const wrapper = shallow(<Header />);
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  expect(headerComponent.length).toBe(1);
});
