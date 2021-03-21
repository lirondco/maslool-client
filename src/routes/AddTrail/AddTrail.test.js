import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddTrail from './AddTrail'

describe(`AddTrail route`, () => {
    it('renders the page', () => {
        const wrapper = shallow(<AddTrail />)
        expect(toJson(wrapper)).toMatchSnapshot()

    })

    it('First button works on click', () => {
        const wrapper = shallow(<AddTrail />)
        wrapper.find('ForwardRef').first().simulate('click', { preventDefault() {}})
    })

    it('Other button works on click', () => {
        const wrapper = shallow(<AddTrail />)
        wrapper.find('ForwardRef').last().simulate('click', { preventDefault() {}})
    })
})