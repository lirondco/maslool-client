import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PendingMessageList from "./PendingMessageList";

describe(`PendingMessageList component`, () => {
  it("renders the complete list", () => {
    const wrapper = shallow(<PendingMessageList />);
    wrapper.setState({
      error: null,
      pending: [
        {
          id: 9,
          message: "test message",
          user: {
            id: 1,
            username: "spongebob",
            email: "sb.squarepants@bikinibottom.net",
            join_date: "2021-03-11T06:47:06.477Z",
            admin: false,
            banned: false,
          },
        },
      ],
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
