import React, { Component } from "react";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import "./UserInfo.css";

export default class UserInfo extends Component {
  render() {
    return (
      <section className="UserInfo">
        <h2>User Profile</h2>
        <hr />
        <EditUserForm />
      </section>
    );
  }
}
