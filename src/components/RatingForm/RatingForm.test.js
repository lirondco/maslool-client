import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { withContext } from "shallow-with-context";
import RatingForm from "./RatingForm";

describe(`RatingForm component`, () => {
    const context = {
        ratings: [],
        trail: { id: 999 },
      };
      const ComponentWithContext = withContext(RatingForm, context);
  it("renders the complete form", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("validates form on submit", () => {
    const wrapper = shallow(
      <ComponentWithContext />,
      { context }
    );

    

    const mockedEvent = {
      preventDefault: () => {},
      target: { rating: { value: 4 } }
    };
    wrapper.find("StarRatings").simulate("change", mockedEvent);
  });
});
