import * as React from 'react';
import { shallow } from 'enzyme';
import SampleComponent from '../SampleComponent';
import * as renderer from 'react-test-renderer';

describe('Counter Component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<SampleComponent />);
    // @ts-ignore
    const countState = wrapper.state().counter;
    expect(countState).toEqual(0);
  });

  it('Can increment the count when the button is clicked', () => {
    const wrapper = shallow(<SampleComponent />);
    // .first() can also be used
    // or we can also speify it as: button.first
    const incrementBtn = wrapper.find('button').last();
    incrementBtn.simulate('click');
    incrementBtn.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('-2');
  });

  // Snapshot Testing
  it('SampleComponent Snapshot Testing', () => {
    const tree = renderer.create(<SampleComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
