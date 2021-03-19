import React, { Component } from "react";
import TrailContext from "../../contexts/TrailContext";
import TrailsApiService from "../../services/trails-api-service";
import { Textarea, Button } from "../Utils/Utils";
import "./CommentForm.css";

export default class CommentForm extends Component {
  static contextType = TrailContext;

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { trail } = this.context;
    const { content } = ev.target;
    TrailsApiService.postComment(trail.id, content.value)
      .then(this.context.addComment)
      .then(() => {
        content.value = "";
      })
      .catch(this.context.setError);
  };

  render() {
    return (
      <form className="CommentForm" onSubmit={this.handleSubmit}>
        <div className="content">
          <Textarea
            required
            aria-label="Type a comment..."
            name="content"
            id="content"
            placeholder="Type a comment..."
          />
        </div>
        <Button type="submit">Post Comment</Button>
      </form>
    );
  }
}
