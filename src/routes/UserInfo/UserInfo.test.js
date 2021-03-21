import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import UserInfo from './UserInfo'

describe(`UserInfo route component`, () => {
  it('renders the complete page', () => {
    const wrapper = shallow(<UserInfo />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})