import React, { Component } from "react";
import { NiceDate, Textarea } from "../../components/Utils/Utils";
import UserContext from "../../contexts/UserContext";
import TrailsApiService from "../../services/trails-api-service";
import "./Comments.css";

export default class Comments extends Component {
  state = { commentEdited: null };
  static defaultProps = {
    onFlagSuccess: () => {},
    onEditSuccess: () => {},
    onDeleteSuccess: () => {},
  };

  static contextType = UserContext;

  handleEditActiveClick = (comment, ev) => {
    ev.preventDefault();
    this.setState({ commentEdited: comment.id });
  };

  handleCancelEditClick = (ev) => {
    ev.preventDefault();
    this.setState({ commentEdited: null });
  };

  renderButtons = (comment) => {
    return (
      <div className="comment_buttons">
        <button
          className="edit_comment_button"
          onClick={(e) => this.handleEditActiveClick(comment, e)}
        >
          Edit
        </button>
        <button
          className="delete_comment_button"
          onClick={(e) => this.handleDelete(comment.id, e)}
        >
          Delete
        </button>
      </div>
    );
  };

  renderEditButtons = () => {
    return (
      <div className="comment_buttons">
        <button type="submit" className="edit_comment_button">
          Submit Edit
        </button>
        <button
          className="edit_comment_button"
          onClick={this.handleCancelEditClick}
        >
          Cancel
        </button>
      </div>
    );
  };

  handleFlaggedClick = (comment, ev) => {
    const { user } = this.context;
    if (comment.user.id === user.id) {
      alert("You cannot flag your own comment!");
      return;
    }
    ev.preventDefault();
    this.context.clearError();
    TrailsApiService.flagComment(comment.id)
      .then(this.props.onFlagSuccess())
      .catch(this.context.setError);
  };

  handleEditSubmit = (comment, ev) => {
    ev.preventDefault();
    this.context.clearError();
    const { content } = ev.target;
    TrailsApiService.editComment(comment.id, content.value)
      .then(this.setState({ commentEdited: null }))
      .then(() => {
        content.value = "";
      })
      .then(this.props.onEditSuccess())
      .catch(this.context.setError);
  };

  handleDelete = (commentId, ev) => {
    ev.preventDefault();
    this.context.clearError();
    TrailsApiService.deleteComment(commentId)
      .then(this.props.onDeleteSuccess())
      .catch(this.context.setError);
  };

  render() {
    const comment = this.props.comment;
    const { user } = this.context;
    let renderedContent;
    if (this.state.commentEdited === comment.id) {
      renderedContent = (
        <>
          <form
            className="edit_comment"
            type="submit"
            onSubmit={(e) => this.handleEditSubmit(comment, e)}
          >
            <div className="comment-content">
              <Textarea
                required
                aria-label="Edit your comment..."
                name="content"
                id="content"
                defaultValue={`${comment.content}`}
              />
              {this.renderEditButtons()}
            </div>
          </form>
        </>
      );
    } else {
      renderedContent = (
        <>
          {user.id === comment.user.id || user.admin === true
            ? this.renderButtons(comment)
            : ""}
          <p className="comment_content" style={{whiteSpace: "pre-wrap"}}>{comment.content}</p>
          {comment.flagged === true ? (
            <>
              <p className="flagged_comment">
                Comment has been flagged as inappropriate
              </p>{" "}
              {user.admin === true ? (
                <button
                  className="flag_button"
                  onClick={(e) => this.handleFlaggedClick(comment, e)}
                >
                  Unflag
                </button>
              ) : (
                ""
              )}
            </>
          ) : (
            <button
              className="flag_button"
              onClick={(e) => this.handleFlaggedClick(comment, e)}
            >
              Flag as inappropriate
            </button>
          )}
        </>
      );
    }
    return (
      <div className="trail_comment">
        <h4 className="comment_username">
          From: {comment.user.username} {comment.user.banned ? "[banned]" : ""}
          {comment.user.admin ? "[moderator]" : ""}
        </h4>
        <p className="comment_date">
          Last modified: <NiceDate date={comment.last_modified} />
        </p>
        {renderedContent}
      </div>
    );
  }
}
