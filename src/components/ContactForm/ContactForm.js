import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import PendingApiService from "../../services/pending-api-service";
import { Button, Label, Required, Textarea } from "../Utils/Utils";
import "./ContactForm.css";

export default class ContactForm extends Component {
  state = {
    submitted: false,
  };

  static contextType = UserContext;

  handleSubmit = (ev) => {
    this.context.clearError();
    ev.preventDefault();
    const { message } = ev.target;
    PendingApiService.postPending(message.value)
      .then((res) => this.setState({ submitted: true, ...res }))
      .then(() => {
        message.value = "";
      })
      .catch(this.context.setError);
  };

  renderForm = () => {
    const { user, error } = this.context;
    return (
      <>
        <p>
          From: <span className="username_contact">{user.username}</span>
        </p>
        <form
          type="submit"
          className="contact_form"
          onSubmit={this.handleSubmit}
        >
          <Label htmlFor="contact_form_message">
            Write your message: <Required />
          </Label>
          <Textarea required id="contact_form_message" name="message" />
          <Button>Submit Message</Button>
          <div role="alert">{error && <p className="error">{error.error}</p>}</div>
        </form>
      </>
    );
  };

  renderSent = () => {
    const { user } = this.context;
    return (
      <>
        <p>
          Thank you, <span className="username_contact">{user.username}</span>.
          Your message was sent and we will contact your email that we have on
          file. Here's your message:
        </p>
        <div className="contact_form">
          <p className="contact_form_message">{this.state.message}</p>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="contact_form">
        {!this.state.submitted ? this.renderForm() : this.renderSent()}
      </div>
    );
  }
}
