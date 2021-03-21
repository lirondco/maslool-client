import React, { Component } from "react";

export const nullTrail = {
  location: {},
};

const TrailContext = React.createContext({
  trail: nullTrail,
  comments: [],
  ratings: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTrail: () => {},
  clearTrail: () => {},
  setComments: () => {},
  addComment: () => {},
  editComment: () => {},
  flagComment: () => {},
  deleteComment: () => {},
  setRatings: () => {},
  addRating: () => {},
  editRating: () => {},
});

export default TrailContext;

export class TrailProvider extends Component {
  state = {
    trail: nullTrail,
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTrail = (trail) => {
    this.setState({ trail });
  };

  setComments = (comments) => {
    this.setState({ comments });
  };

  setRatings = (ratings) => {
    this.setState({ ratings });
  };

  clearTrail = () => {
    this.setTrail(null);
    this.setComments([]);
    this.setRatings([]);
  };

  addComment = (comment) => {
    this.setComments([...this.state.comments, comment]);
  };

  editComment = (id, newComment) => {
    let index = this.state.comments.findIndex(comment => comment.id === id)

    if (index === -1) {
      this.setError({ error: 'Comment not found' })
    } else {
      this.clearError()
      this.setState({
        comments: [
          ...this.state.comments.slice(0, index),
          Object.assign({}, this.state.comments[index], newComment),
          ...this.state.comments.slice(index+1)
        ]
      })
    }
  }

  flagComment = (commentId) => {
    let index = this.state.comments.findIndex(comment => comment.id === commentId)

    if (index === -1) {
      this.setError({ error: 'Comment not found' })
    } else {
      this.clearError()
      this.setState({
        comments: [
          ...this.state.comments.slice(0, index),
          Object.assign({}, this.state.comments[index], {flagged: !this.state.comments[index].flagged}),
          ...this.state.comments.slice(index+1)
        ]
      })
    }
  }

  deleteComment = (commentId) => {
    this.setState({ comments: this.state.comments.filter(comment =>{
      return comment.id !== commentId
    })})
  }

  addRating = (rating) => {
    this.setRatings([...this.state.ratings, rating]);
  };

  editRating = (ratingId, newRating) => {
    let index = this.state.ratings.findIndex(rating => rating.id === ratingId)
    if (index === -1) {
      this.setError({ error: 'Rating not found'})
    } else {
      this.setState({
        ratings: [
          ...this.state.ratings.slice(0, index),
          Object.assign({}, this.state.ratings[index], newRating),
          ...this.state.ratings.slice(index+1)
        ]
      })
    }
  }

  render() {
    const value = {
      trail: this.state.trail,
      comments: this.state.comments,
      ratings: this.state.ratings,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTrail: this.setTrail,
      setComments: this.setComments,
      setRatings: this.setRatings,
      clearTrail: this.clearTrail,
      addComment: this.addComment,
      editComment: this.editComment,
      flagComment: this.flagComment,
      deleteComment: this.deleteComment,
      addRating: this.addRating,
      editRating: this.editRating,
    };
    return (
      <TrailContext.Provider value={value}>
        {this.props.children}
      </TrailContext.Provider>
    );
  }
}
