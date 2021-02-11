import React from 'react';
import Home from './homeComponent';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

test('Render the Home Component', () => {
  const wrapper = shallow(<Home />);
  const headerComponent = wrapper.find("[data-test='component-home']")
  expect(headerComponent.length).toBe(1);
});
