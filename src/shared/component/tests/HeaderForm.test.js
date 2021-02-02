import React from 'react';
import HeaderForm from '../HeaderForm';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { checkProps, findByTestAttr } from '../../../testing/testUtils';
import NoProducts from '../NoProducts';

Enzyme.configure({ adapter: new Adapter() });

const setup = (props = {}) => {
  return shallow(<HeaderForm.WrappedComponent {...props} />);
};

const mockedQueryFn = jest.fn();

const expectedProps = {
  onUpdateQuery: mockedQueryFn,
};

test('Render the header component', () => {
  const wrapper = setup();
  const HeaderForm = findByTestAttr(wrapper, 'component-form-header');
  expect(HeaderForm.length).toBe(1);
});
