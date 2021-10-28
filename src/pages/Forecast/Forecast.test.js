import React from 'react';
import { shallow } from 'enzyme';
import Forecast from './Forecast';

describe('<Forecast />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Forecast />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
