import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Login from './Login'

describe(`Login route component`, () => {
  it('renders the complete page', () => {
    const wrapper = shallow(<Login />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})