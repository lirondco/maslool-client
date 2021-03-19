import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchResult.css";
import StarRatings from "react-star-ratings";

export default class SearchResult extends Component {
  render() {
    return (
      <div className="search_result">
        <Link to={`/trails/${this.props.id}`}>
          <h4>{this.props.name}</h4>
        </Link>
        <StarRatings
          rating={this.props.rating}
          starDimension="15px"
          starSpacing="5px"
          starRatedColor="red"
          starEmptyColor="grey"
        />
        <p>
          Location: {this.props.address_line} {this.props.city},{" "}
          {this.props.region} {this.props.postal_code}
        </p>
        <p>Difficulty: {this.props.difficulty}</p>
      </div>
    );
  }
}
