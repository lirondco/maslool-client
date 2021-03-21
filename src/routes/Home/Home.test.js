import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'

describe(`Home page component`, () => {
  it('renders the complete home page', () => {
    const wrapper = shallow(<Home />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})