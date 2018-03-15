import React from 'react';
import { shallow } from 'enzyme';
import InputFieldWithLabel from '../src/index';
test('InputFieldWithLabel renders without problems', () => {
  shallow(<InputFieldWithLabel />);
  shallow(<InputFieldWithLabel meta={{ touched: true, error: 'mockError' }} />);
});
