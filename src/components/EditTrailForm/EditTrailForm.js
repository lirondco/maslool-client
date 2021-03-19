import React, { Component } from "react";
import TrailsApiService from "../../services/trails-api-service";
import { Input, Label, Button, Textarea } from "../Utils/Utils";
import AllTrailsContext from "../../contexts/AllTrailsContext";
import "./EditTrailForm.css";

export default class EditTrailForm extends Component {
  state = {
    id: null,
    trail: null,
  };

  static defaultProps = {
    onCancelSuccess: () => {},
  };

  static contextType = AllTrailsContext;

  componentDidMount = () => {
    this.context.clearError();
    TrailsApiService.searchTrails("")
      .then(this.context.setAllTrails)
      .catch(this.context.setError);
  };

  handleDeleteTrail = (ev) => {
    ev.preventDefault();
    this.context.clearError();
    if (
      window.confirm(
        "WARNING! This will delete this trail and all of its related components permanently. Do you wish to continue?"
      )
    ) {
      TrailsApiService.deleteTrail(this.state.id)
        .then(() => this.setState({ id: null, trail: null }))
        .catch(this.context.setError);
      TrailsApiService.searchTrails("")
        .then(this.context.setAllTrails)
        .catch(this.context.setError);
    }
    return;
  };

  handleEditTrail = (ev) => {
    ev.preventDefault();
    this.context.setError("Processing ... ");
    const {
      name,
      website,
      difficulty,
      description,
      safety,
      address_line,
      city,
      region,
      postal_code,
    } = ev.target;
    TrailsApiService.editTrail(this.state.id, {
      name: name.value,
      website: website.value,
      difficulty: difficulty.value,
      description: description.value,
      safety: safety.value,
      location: {
        address_line: address_line.value,
        city: city.value,
        region: region.value,
        postal_code: postal_code.value,
      },
    })
      .then(() => this.context.clearError())
      .catch(this.context.setError);
    TrailsApiService.getTrail(this.state.id)
      .then((trail) => this.setState({ trail }))
      .then(() => this.props.onCancelSuccess())
      .catch(this.context.setError);
  };

  handleSelectTrail = (ev) => {
    this.setState({ trail: null });
    ev.preventDefault();
    this.context.clearError();
    const { trailId } = ev.target;
    this.setState({ id: trailId.value });
    TrailsApiService.getTrail(trailId.value)
      .then((trail) => this.setState({ trail }))
      .then(() => (trailId.value = ""))
      .catch(this.context.setError);
  };

  handleCancelClick = (ev) => {
    ev.preventDefault();
    this.props.onCancelSuccess();
  };

  renderForm = () => {
    const { trail } = this.state;
    const difficulties = ["Beginner", "Intermediate", "Advanced"];
    const { error } = this.context;

    return (
      <>
        <form
          type="submit"
          className="edit_trail"
          onSubmit={this.handleEditTrail}
        >
          <div className="main_form">
            <Label htmlFor="trail_name_edit">Trail Name:</Label>
            <Input
              ref={this.firstInput}
              id="trail_name_edit"
              name="name"
              defaultValue={trail.name}
            />
            <br />
            <Label htmlFor="trail_website_edit">Website:</Label>
            <Input
              ref={this.firstInput}
              id="trail_website_edit"
              name="website"
              defaultValue={trail.website}
            />
            <br />
            <Label htmlFor="trail_difficulty_edit">Difficulty:</Label>
            <select
              id="trail_difficulty_edit"
              name="difficulty"
              defaultValue={trail.difficulty}
            >
              {difficulties.map((diff) => {
                return (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                );
              })}
            </select>
            <br />
            <Label htmlFor="trail_description_edit">Trail Description:</Label>
            <Textarea
              id="trail_description_edit"
              name="description"
              defaultValue={trail.description}
            />
            <br />
            <Label htmlFor="trail_safety_edit">
              Safety Information (optional but recommended):
            </Label>
            <Textarea
              id="trail_safety_edit"
              name="safety"
              defaultValue={trail.safety}
            />
            <br />
            <Label htmlFor="location_address_edit">Address Line:</Label>
            <Input
              id="location_address_edit"
              name="address_line"
              defaultValue={trail.location.address_line}
            />
            <br />
            <Label htmlFor="location_city_edit">City:</Label>
            <Input
              id="location_city_edit"
              name="city"
              defaultValue={trail.location.city}
            />
            <br />
            <Label htmlFor="location_region_edit">Region or State:</Label>
            <Input
              id="location_region_edit"
              name="region"
              defaultValue={trail.location.region}
            />
            <br />
            <Label htmlFor="location_postcode_edit">Postal Code:</Label>
            <Input
              id="location_postcode_edit"
              name="postal_code"
              defaultValue={trail.location.postal_code}
            />
            <br />
          </div>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <footer>
            <Button type="submit">Submit Edit</Button>
            <Button type="button" onClick={this.handleDeleteTrail}>
              Delete Trail
            </Button>
          </footer>
        </form>
      </>
    );
  };

  render() {
    const { allTrails } = this.context;
    const sortedTrails = [...allTrails].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    return (
      <div className="EditTrailForm">
        <form
          className="load_trail"
          type="submit"
          onSubmit={this.handleSelectTrail}
        >
          <span className="select_trail">
            <Label htmlFor="edit_trail_select">Select trail to edit: </Label>
            <select id="edit_trail_select" name="trailId">
              {sortedTrails.map((trail) => (
                <option key={trail.id} value={trail.id}>
                  {trail.name}
                </option>
              ))}
            </select>
          </span>
          <Button type="submit">Load Trail</Button>
          <Button onClick={this.handleCancelClick}>Cancel Edit</Button>
        </form>
        {this.state.trail ? (
          this.renderForm()
        ) : (
          <p className="conditional_text">Please select a trail to edit.</p>
        )}
      </div>
    );
  }
}
