import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SearchResult from './SearchResult'

describe(`SearchResult component`, () => {
    const props ={
        name: 'test name',
        webiste: 'www.test.com',
        rating: 4,
        difficulty: 'Beginner',
        address_line: '111 Test St',
        city: 'Test Town',
        region: 'Massachutests',
        postal_code: '11111'
    }

    it('renders a search result', () => {
        const wrapper = shallow(<SearchResult {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})