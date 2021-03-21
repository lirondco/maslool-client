import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import FlaggedComment from './FlaggedComment'


describe(`Comments component`, () => {
    const props =
        {
            id: 9,
            content: "test comment test comment",
            last_modified: "2021-03-18T15:30:29.873Z",
            flagged: true,
            flaged_by: "test_flagger",
            user: {
                id: 3,
                username: "test_user",
                join_date: "2021-03-11T06:47:06.477Z",
                admin: true,
                banned: false
            }
        }



        it('renders a flagged comment', () => {
            const wrapper = shallow(<FlaggedComment comment={props} />)
            expect(toJson(wrapper)).toMatchSnapshot()
        })

        it('button works when clicked and window confirmation is rendered', () => {
            const wrapper = shallow(<FlaggedComment comment={props} />)
            window.confirm = jest.fn(() => true)
            wrapper.find('ForwardRef').simulate('click', { preventDefault() {}})
            expect(window.confirm).toBeCalled()
        })
})