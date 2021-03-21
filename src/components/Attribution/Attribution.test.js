import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Attribution from './Attribution'

describe(`Attribution component`, () => {
    it('renders the footer', () => {
        const wrapper = shallow(<Attribution />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})