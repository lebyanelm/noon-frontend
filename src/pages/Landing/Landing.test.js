import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('<Landing />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Landing />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
