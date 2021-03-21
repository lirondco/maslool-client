import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ContactForm from "./ContactForm";
import { withContext } from "shallow-with-context";

describe(`ContactForm component`, () => {
  const context = {
    clearError: () => {},
    user: { id: 3, admin: false, banned: false, username: "test_user" },
  };
  const ComponentWithContext = withContext(ContactForm, context);

  it("renders the form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    const mockedEvent = {
      preventDefault: () => {},
      target: { message: { value: "Test" } },
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
