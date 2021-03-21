import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EditUserForm from "./EditUserForm";
import { withContext } from "shallow-with-context";

describe(`EditUserForm component`, () => {
  const context = {
    clearError: () => {},
    user: { id: 3, admin: false, banned: false, username: "test_user" },
  };
  const ComponentWithContext = withContext(EditUserForm, context);
  
  it("renders the form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ isEditing: true, user: {id: 3, admin: false, banned: false, username: "test_user", email: "test@ema.il"}})
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ isEditing: true, user: {id: 3, admin: false, banned: false, username: "test_user", email: "test@ema.il"}})
    const mockedEvent = {
      preventDefault: () => {},
      target: { email: { value: 'test@ema.il' } }
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
