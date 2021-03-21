import React, { Component } from "react";
import StarRatings from "react-star-ratings";
import TrailContext from "../../contexts/TrailContext";
import TokenService from "../../services/token-service";
import TrailsApiService from "../../services/trails-api-service";
import "./RatingForm.css";

export default class RatingForm extends Component {
  static contextType = TrailContext;

  addRating = (newRating) => {
    const { trail } = this.context;
    TrailsApiService.postRating(trail.id, newRating)
      .then(this.context.addRating)
      .catch(this.context.setError);
  };

  getRatingId = () => {
    const jwtPayload = TokenService.parseAuthToken();
    const { ratings } = this.context;
    const arrayRatings = [...ratings];
    let filteredRating = arrayRatings.filter(
      (rating) => rating.user.id === jwtPayload.user_id
    );
    if (filteredRating.length === 0) {
      return null;
    } else {
      return filteredRating[0].id;
    }
  };

  getRating = () => {
    const jwtPayload = TokenService.parseAuthToken();
    const { ratings } = this.context;
    const arrayRatings = [...ratings];
    let filteredRating = arrayRatings.filter(
      (rating) => rating.user.id === jwtPayload.user_id
    );
    if (filteredRating.length === 0) {
      return null;
    } else {
      return filteredRating[0].rating;
    }
  };

  editRating = (newRating) => {
    const ratingId = this.getRatingId();
    TrailsApiService.editRating(ratingId, newRating)
    .then(() => this.context.editRating(ratingId, {rating: newRating}))
    .catch(this.context.setError);
  };

  render() {
    const ratingId = this.getRatingId();
    const rating = this.getRating();
    return (
      <div className="RatingForm">
        <p>Your Rating:</p>
        {ratingId ? (
          <StarRatings
            rating={rating}
            changeRating={this.editRating}
            numberOfStars={5}
            starDimension="30px"
            starSpacing="15px"
            starRatedColor="red"
            starEmptyColor="grey"
            name="rating"
          />
        ) : (
          <StarRatings
            rating={0}
            changeRating={this.addRating}
            numberOfStars={5}
            starDimension="30px"
            starSpacing="15px"
            starRatedColor="red"
            starEmptyColor="grey"
            name="rating"
          />
        )}
      </div>
    );
  }
}
