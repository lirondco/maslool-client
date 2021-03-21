import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ContactAdmin from './ContactAdmin'

describe(`ContactAdmin route`, () => {
  it('renders the complete page', () => {
    const wrapper = shallow(<ContactAdmin />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})