import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Welcome from './Welcome'
import { withContext } from "shallow-with-context";

describe(`Welcome page component`, () => {
  it('renders the complete Welcome page for regular users', () => {
    const context = { user: {
        id: 1,
        username: 'test_user',
        admin: false,
        banned: false
    } };
    const ComponentWithContext = withContext(Welcome, context);
    const wrapper = shallow(<ComponentWithContext />, { context })
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('renders the complete Welcome page for admins', () => {
    const context = { user: {
        id: 1,
        username: 'test_user',
        admin: true,
        banned: false
    } };
    const ComponentWithContext = withContext(Welcome, context);
    const wrapper = shallow(<ComponentWithContext />, { context })
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})