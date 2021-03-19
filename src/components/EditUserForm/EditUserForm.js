import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import UsersApiService from "../../services/users-api-service";
import { Input, Label, NiceDate } from "../Utils/Utils";
import "./EditUserForm.css";

export default class EditUserForm extends Component {
  state = {
    user: null,
    isEditing: false,
  };

  static contextType = UserContext;

  componentDidMount() {
    const { user } = this.context;
    UsersApiService.getUser(user.id)
      .then((res) => this.setState({ user: res }))
      .catch(this.context.setError);
  }

  handleEditClick = (e) => {
    e.preventDefault();
    this.setState({ isEditing: true });
  };

  handleCancelClick = (e) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };

  handleSubmit = (ev) => {
    this.context.clearError();
    ev.preventDefault();
    const { user } = this.context;
    const { email } = ev.target;
    UsersApiService.editUser(user.id, email.value)
      .then(this.setState({ isEditing: false }))
      .then(() => (email.value = ""))
      .catch(this.context.setError);
    UsersApiService.getUser(user.id)
      .then((res) => this.setState({ user: res }))
      .catch(this.context.setError);
  };

  renderEditInterface = () => {
    return (
      <form type="submit" className="edit_email" onSubmit={this.handleSubmit}>
        <Label htmlFor="email">Email: </Label>
        <Input name="email" id="email" defaultValue={this.state.user.email} />
        <button type="submit">Change</button>
        <button onClick={this.handleCancelClick}>Cancel</button>
      </form>
    );
  };

  renderUserInfo = () => {
    return (
      <>
        <p>
          Username: <span>{this.state.user.username}</span>
        </p>
        {this.state.isEditing ? (
          this.renderEditInterface()
        ) : (
          <p>
            Email: <span>{this.state.user.email} </span>
            <button
              onClick={this.handleEditClick}
              type="button"
              className="Edit_button"
            >
              [edit]
            </button>
          </p>
        )}
        <p>
          Member since:{" "}
          <span>
            <NiceDate date={this.state.user.join_date} />
          </span>
        </p>
      </>
    );
  };

  render() {
    return (
      <div className="user_info">
        {this.state.user ? this.renderUserInfo() : <p>Loading ...</p>}
        <div role="alert">
          {this.context.error && (
            <p className="error">{this.context.error.error}</p>
          )}
        </div>
      </div>
    );
  }
}
