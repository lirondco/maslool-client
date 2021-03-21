import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UsersList from "./UsersList";

describe(`UsersList route component`, () => {
  it("renders the complete page when state is empty", () => {
    const wrapper = shallow(<UsersList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the complete page when state is not empty", () => {
    const wrapper = shallow(<UsersList />);
    const testsUsers = [
      {
        id: 2,
        email: "p.star@bikinibottom.net",
        username: "patrick",
        join_date: "2021-03-11T06:47:06.477Z",
        admin: false,
        banned: true,
        banned_by: "sandy",
      },
      {
        id: 3,
        email: "sandy.cheeks@squirrelmail.com",
        username: "sandy",
        join_date: "2021-03-11T06:47:06.477Z",
        admin: true,
        banned: false,
        banned_by: null,
      },
      {
        id: 6,
        email: "s.tentacles@krustykrab.com",
        username: "squidward",
        join_date: "2021-03-11T06:47:06.477Z",
        admin: false,
        banned: false,
        banned_by: null,
      },
    ]
    wrapper.setState({
      users: testsUsers,
      error: null,
      searchResult: testsUsers,
    });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
