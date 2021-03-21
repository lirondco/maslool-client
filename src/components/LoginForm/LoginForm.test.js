import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";
import { withContext } from "shallow-with-context";

describe(`LoginForm component`, () => {

  const context = {
    clearError: () => {},
    user: { id: 3, admin: false, banned: false, username: "test_user" },
  };
  const ComponentWithContext = withContext(LoginForm, context);

  it("renders the form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context } );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    const mockedEvent = {
      preventDefault: () => {},
      target: { username: { value: "Test" }, password: { value: "test" } },
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
