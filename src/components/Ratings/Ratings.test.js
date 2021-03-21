import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Ratings from "./Ratings";

describe("Ratings component", () => {
  const props = {
    id: 7,
    rating: 3,
    date_modified: "2021-03-11T06:47:06.477Z",
    user: {
        id: 1,
        username: "test_user",
        join_date: "2021-03-11T06:47:06.477Z",
        admin: false,
        banner: false
    }
  };

  it("renders the rating given props", () => {
    const wrapper = shallow(<Ratings rating={props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  
});
