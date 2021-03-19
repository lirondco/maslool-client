import React, { Component } from "react";
import DANGER from "./DANGER.png";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img src={DANGER} alt="404 Error, page not found" />
      </div>
    );
  }
}
