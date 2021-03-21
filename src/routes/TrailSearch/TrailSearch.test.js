import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import TrailSearch from "./TrailSearch";
import { withContext } from "shallow-with-context";

describe(`TrailSearch route component`, () => {
  const context = {
    allTrails: [
      { id: 1, name: "test trail", location: { region: "Pennsylvania" } }
    ],
    searchResult: [
        { id: 1, name: "test trail", location: { region: "Pennsylvania" } },
        { id: 2, name: "other test trail", location: { region: "Iowa" } }
      ],
    clearError: () => {},
    setError: () => {},
    clearSearchResult: () => {},
  };
  const ComponentWithContext = withContext(TrailSearch, context);

  it("renders the complete page when search is active", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ searchActive: true });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the search result when search is not active", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ searchActive: false });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
