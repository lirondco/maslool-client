import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MessageContent from "./MessageContent";

describe("MessageContent component", () => {
  const props = {
    id: 9,
    message: "This is a message",
    user: {
      id: 1,
      username: "test_user",
      email: "test@user.no",
      join_date: "2021-03-11T06:47:06.477Z",
      admin: false,
      banned: false,
    },
  };

  it("renders the message given props", () => {
    const wrapper = shallow(<MessageContent pending={props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

  it('button works when clicked', () => {
      const wrapper = shallow(<MessageContent pending={props} />)
      window.confirm = jest.fn(() => true)
      wrapper.find('ForwardRef').simulate('click', { preventDefault() {}})
      expect(window.confirm).toBeCalled()
  })
});
