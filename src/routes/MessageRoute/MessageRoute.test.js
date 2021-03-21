import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MessageRoute from "./MessageRoute";

describe(`MessageRoute component`, () => {
  it("renders the complete message", () => {
    const wrapper = shallow(<MessageRoute />);
    wrapper.setState({
      pending:
        {
          id: 9,
          message: "test",
          user: {
            id: 1,
            username: "spongebob",
            email: "sb.squarepants@bikinibottom.net",
            join_date: "2021-03-11T06:47:06.477Z",
            admin: false,
            banned: false,
          },
          error: null
        },
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
