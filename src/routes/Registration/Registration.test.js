import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Registration from './Registration'

describe(`Regisration route`, () => {
  it('renders the complete page', () => {
    const wrapper = shallow(<Registration />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
