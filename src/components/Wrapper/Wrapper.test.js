import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './Wrapper';

describe('<Wrapper />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Wrapper />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
