import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { withContext } from "shallow-with-context";
import TrailSearchForm from "./TrailSearchForm";

describe(`TrailSearchForm component`, () => {
  const context = {
    allTrails: [{id: 1, location: { region: 'Pennsylvania' } }],
    clearError: () => {},
    setError: () => {},
    clearSearchResult: () => {}
  };
  const ComponentWithContext = withContext(TrailSearchForm, context);

  it("renders the form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("form submits when submitted", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    const mockedEvent = {
      preventDefault: () => {},
      target: {
        search: { value: "name" },
        difficulty: { value: "Beginner" },
        rating: { value: 3 },
        location: { value: 'Pennsylvania' }
      },
    };
    wrapper.find("form").at(0).simulate("submit", mockedEvent);
  });
});
