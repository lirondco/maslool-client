import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import FlaggedCommentList from "./FlaggedCommentList";

describe(`FlaggedCommentList component`, () => {
  it("renders the complete list", () => {
    const wrapper = shallow(<FlaggedCommentList />);
    wrapper.setState({
      error: null,
      comments: [
        {
          id: 2,
          content:
            "Mister Krabs is lying do not believe him he has not paid me my last salary!!!",
          last_modified: "2021-03-11T06:47:06.477Z",
          flagged: true,
          flagged_by: "squidward",
          trail_id: 3,
          user: {
            id: 1,
            username: "spongebob",
            join_date: "2021-03-11T06:47:06.477468",
            admin: false,
            banned: false,
          },
        },
        {
          id: 9,
          content: "why did my friend get banned? ",
          last_modified: "2021-03-20T17:37:56.565Z",
          flagged: true,
          flagged_by: "squidward",
          trail_id: 1,
          user: {
            id: 1,
            username: "spongebob",
            join_date: "2021-03-11T06:47:06.477468",
            admin: false,
            banned: false,
          },
        },
      ],
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
