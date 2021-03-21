import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { withContext } from 'shallow-with-context'
import CommentForm from './CommentForm'

describe(`CommentForm component`, () => {
    it('renders the complete form', () => {
        const wrapper = shallow(<CommentForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('validates form on submit', () => {
        const context = { trail: { id: 999 } };
        const ComponentWithContext = withContext(CommentForm, context);
        const handleSubmit = jest.fn();
        const wrapper = shallow(
            <ComponentWithContext handleSubmit={handleSubmit}/>,
            { context }
        );
        const mockedEvent = { preventDefault: () => {}, target: { content: { value: 'Test' } } }
        wrapper.find('form').simulate('submit', mockedEvent)
      })
})
