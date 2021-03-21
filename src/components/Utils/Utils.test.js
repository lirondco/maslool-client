import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Button, Input, Textarea, Required, Label, NiceDate } from './Utils'

describe(`Utils components`, () => {
    const props = {
        className: 'test-class-name',
        children: <p>test children</p>,
        'data-other': 'test-other-prop'
    }

    const testDate = '2021-03-11T06:47:06.477Z'

    it('renders a date when NiceDate is called', () => {
        const wrapper = shallow(<NiceDate date={testDate} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('reders a button when called', () => {
        const wrapper = shallow(<Button {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('button works when clicked', () => {
        const wrapper = shallow(<Button {...props} />)
        wrapper.find('button').simulate('click', { preventDefault() {}})
    })

    it('Input renders when called', () => {
        const wrapper = shallow(<Input {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('Textarea renders when called', () => {
        const wrapper = shallow(<Textarea {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('Required renders when called', () => {
        const wrapper = shallow(<Required {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('Label renders when called', () => {
        const wrapper = shallow(<Label {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})