import React from 'react';
import { shallow } from 'enzyme';
import WeatherResult from './WeatherResult';

describe('<WeatherResult />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<WeatherResult />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
