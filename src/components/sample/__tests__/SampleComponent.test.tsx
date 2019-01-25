import * as React from 'react';
import { shallow } from 'enzyme';
import SampleComponent from '../SampleComponent';

describe('Counter Component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<SampleComponent />);
    // @ts-ignore
    const countState = wrapper.state().counter;
    expect(countState).toEqual(0);
  });
});
