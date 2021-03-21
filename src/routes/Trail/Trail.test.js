import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { withContext } from "shallow-with-context";
import Trail from "./Trail";

describe(`Trail route component`, () => {
  const context = {
    trail: {
      id: 1,
      name: "Test",
      date_published: "2021-03-11T06:47:06.477Z",
      website: "test.com",
      description: "test desc",
      safety: "test saf",
      rating: 2,
      difficulty: "Beginner",
      number_of_comments: 3,
      number_of_ratings: 7,
      location: {
        address_line: "111 Te St.",
        city: "El Testo",
        region: "Testxas",
        postal_code: "77777",
      },
    },
    comments: [],
    ratings: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setTrail: () => {},
    clearTrail: () => {},
    setComments: () => {},
    addComment: () => {},
    setRatings: () => {},
    addRating: () => {},
  };
  const ComponentWithContext = withContext(Trail, context);

  it("renders the loading page", () => {
    const wrapper = shallow(<Trail />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the page with context", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ active: null });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the page with description", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ active: "description" });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the page with safety", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ active: "safety" });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the page with comments", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ active: "comments" });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the page with ratings", () => {
    const wrapper = shallow(<ComponentWithContext />, { context });
    wrapper.setState({ active: "ratings" });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
