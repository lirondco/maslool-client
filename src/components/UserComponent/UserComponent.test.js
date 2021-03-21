import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import UserComponent from './UserComponent'

describe(`UserComponent`, () => {
    const props = {
        id: 1,
        email: 'test@ema.il',
        username: 'testuser',
        join_date: '2021-03-11T06:47:06.477Z',
        admin: false,
        banned: false,
        banned_by: null
    }

    it('renders the component given props', () => {
        const wrapper = shallow(<UserComponent user={props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('button works when clicked', () => {
        const wrapper = shallow(<UserComponent user={props} />)
        window.confirm = jest.fn(() => true)
        wrapper.find('ForwardRef').simulate('click', { preventDefault() {}})
        expect(window.confirm).toBeCalled()
    })
})