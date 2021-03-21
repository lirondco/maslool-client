import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Comments from './Comments'
import { withContext } from 'shallow-with-context'


describe(`Comments component`, () => {
    const props =
        {
            id: 9,
            content: "test comment test comment",
            last_modified: "2021-03-18T15:30:29.873Z",
            flagged: true,
            flaged_by: null,
            user: {
                id: 3,
                username: "test_user",
                join_date: "2021-03-11T06:47:06.477Z",
                admin: false,
                banned: false
            }
        }

        const context = { user: { id: 3,
            admin: false,
            banned: false,
            username: 'test_user' }}
        const ComponentWithContext = withContext(Comments, context)

        it('renders a comment', () => {
            const wrapper = shallow(<ComponentWithContext comment={props} />, { context })
            expect(toJson(wrapper)).toMatchSnapshot()
        })

        it('button works when clicked', () => {
            const wrapper = shallow(<ComponentWithContext comment={props} />, { context })
            wrapper.find('button').at(0).simulate('click', { preventDefault() {}})
        })
})