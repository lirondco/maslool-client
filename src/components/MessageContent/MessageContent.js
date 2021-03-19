import React, { Component } from "react";
import "./MessageContent.css";

export default class MessageContent extends Component {
  static defaultProps = {
    onDeleteClick: () => {},
  };

  render() {
    const pending = this.props.pending;

    return (
      <div className="MessageContent">
        <p>
          {" "}
          From: <span> {pending.user.username} </span>
        </p>
      </div>
    );
  }
}
