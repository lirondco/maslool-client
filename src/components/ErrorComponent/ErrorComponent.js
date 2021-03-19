import React, { Component } from "react";
import ErrorIMG from "./error.png";
import "./ErrorComponent.css";

export default class ErrorComponent extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch = (error, errorInfo) => {
    console.error(error, errorInfo);

    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="page_error">
          <img
            src={ErrorIMG}
            alt="Oops. Looks like we are currently unavailable. Please check back again later"
          />
        </div>
      );
    }
    return this.props.children;
  }
}
