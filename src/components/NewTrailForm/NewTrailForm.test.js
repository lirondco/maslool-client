import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NewTrailForm from "./NewTrailForm";

describe(`NewTrailForm component`, () => {
  it("renders the form", () => {
    const wrapper = shallow(<NewTrailForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<NewTrailForm />);
    const mockedEvent = {
      preventDefault: () => {},
      target: {
        name: { value: "name" },
        website: { value: "www.test.com" },
        description: { value: "description" },
        difficulty: { value: "Beginner" },
        safety: { value: "Safety" },
        address_line: { value: "100 Te St." },
        city: { value: "Testing City" },
        region: { value: "Testing Province" },
        postal_code: { value: "12345" },
      },
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
