import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RegistrationForm from "./RegistrationForm";
import { withContext } from "shallow-with-context";

describe(`RegistrationForm component`, () => {

  const context = {
    processLogin: () => {}
  };
  const ComponentWithContext = withContext(RegistrationForm, context);

  it("renders the form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context } );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    const mockedEvent = {
      preventDefault: () => {},
      target: { username: { value: "Test" }, password: { value: "test" }, email: { value: 'test@ema.il' } },
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
