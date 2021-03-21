import React, { Component } from "react";
import TrailsApiService from "../../services/trails-api-service";
import { Input, Required, Label, Button, Textarea } from "../Utils/Utils";
import Loading from "../Loading/Loading";
import "./NewTrailForm.css";

export default class NewTrailForm extends Component {
  state = {
    error: null,
    isLoading: false,
  };

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
    onCancelSuccess: () => {},
  };

  firstInput = React.createRef();

  componentDidMount() {
    if (process.env.NODE_ENV !== "test") this.firstInput.current.focus();
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: "Processing your request..." });
    const {
      name,
      website,
      description,
      difficulty,
      safety,
      address_line,
      city,
      region,
      postal_code,
    } = ev.target;
    TrailsApiService.postTrail({
      name: name.value,
      website: website.value,
      description: description.value,
      difficulty: difficulty.value,
      safety: safety.value,
      location: {
        address_line: address_line.value,
        city: city.value,
        region: region.value,
        postal_code: postal_code.value,
      },
    })
      .then((trail) => {
        name.value = "";
        website.value = "";
        description.value = "";
        difficulty.value = "";
        safety.value = "";
        address_line.value = "";
        city.value = "";
        region.value = "";
        postal_code.value = "";
        this.setState({ isLoading: false, error: "Success!" });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleCancelClick = (ev) => {
    ev.preventDefault();
    this.props.onCancelSuccess();
  };

  render() {
    const { error } = this.state;
    const difficulties = ["Beginner", "Intermediate", "Advanced"];
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    return (
      <div className="NewTrailForm">
        <form type="submit" onSubmit={this.handleSubmit}>
          <div className="main_form">
            <Label htmlFor="trail-name-input">
              Trail Name: <Required />
            </Label>
            <Input
              ref={this.firstInput}
              id="trail-name-input"
              name="name"
              required
            />
            <br />
            <Label htmlFor="trail-website-input">
              Website: <Required />
            </Label>
            <Input id="trail-website-input" name="website" required />
            <br />
            <Label htmlFor="trail-difficulty-select">
              Difficulty: <Required />
            </Label>
            <select id="trail-difficulty-select" name="difficulty">
              {difficulties.map((diff) => {
                return (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                );
              })}
            </select>
            <br />
            <Label htmlFor="trail_description_textarea">
              Trail Description: <Required />
            </Label>
            <Textarea
              id="trail_description_textarea"
              name="description"
              required
            />
            <Label htmlFor="trail_safety_textarea">
              Safety Information (optional but recommended):
            </Label>
            <Textarea id="trail_safety_textarea" name="safety" />
            <Label htmlFor="location_address_input">
              Address Line: <Required />
            </Label>
            <Input id="location_address_input" name="address_line" required />
            <br />
            <Label htmlFor="location_city_input">
              City: <Required />
            </Label>
            <Input id="location_city_input" name="city" required />
            <br />
            <Label htmlFor="location_region_input">
              State or Region: <Required />
            </Label>
            <Input id="location_region_input" name="region" required />
            <br />
            <Label htmlFor="location_postalcode_input">
              Post Code: <Required />
            </Label>
            <Input id="location_postalcode_input" name="postal_code" required />
            <br />
          </div>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <footer className="double_buttons">
            <Button type="submit">Submit Trail</Button>
            <Button onClick={this.handleCancelClick}>Cancel</Button>
          </footer>
        </form>
      </div>
    );
  }
}
