import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Required, Label, Button } from "../Utils/Utils";
import AuthApiService from "../../services/auth-api-service";
import "./RegistrationForm.css";
import UserContext from "../../contexts/UserContext";
import Loading from "../Loading/Loading";

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };
  state = {
    error: null,
    isLoading: false,
    password: null,
    verify: null,
    isMatch: false,
  };

  static contextType = UserContext;

  firstInput = React.createRef();

  handlePasswordChange = (ev) => {
    this.setState({ password: ev.target.value });
    if (this.state.verify !== ev.target.value) {
      this.setState({ isMatch: false, error: "Password must match" });
    } else {
      this.setState({ error: null, isMatch: true });
    }
  };

  handlePasswordCheck = (ev) => {
    this.setState({ verify: ev.target.value });
    if (ev.target.value !== this.state.password) {
      this.setState({ isMatch: false, error: "Password must match" });
    } else {
      this.setState({ error: null, isMatch: true });
    }
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: "Processing your request..." });
    const { username, password, email } = ev.target;
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
      email: email.value,
    })
      .then((user) => {
        this.setState({ error: null, isLoading: true, password: null });
        AuthApiService.postLogin({
          username: username.value,
          password: password.value,
        }).then((res) => {
          username.value = "";
          password.value = "";
          email.value = "";
          this.context.processLogin(res.authToken);
          this.props.onRegistrationSuccess();
          this.setState({ isLoading: false });
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  componentWillUnmount() {
    this.setState({ password: null });
  }

  render() {
    const { error } = this.state;
    if (this.state.isLoading === true) {
      return <Loading />;
    }
    return (
      <>
        <h2>Register</h2>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className="main_reg_form">
            <Label htmlFor="registration-username-input">
              Username: <Required />
            </Label>
            <Input
              ref={this.firstInput}
              id="registration-username-input"
              name="username"
              required
            />
            <Label htmlFor="registration-password-input">
              Password: <Required />
            </Label>
            <Input
              onChange={this.handlePasswordChange}
              id="registration-password-input"
              name="password"
              type="password"
              required
            />
            <Label htmlFor="registration-verify-password-input">
              Repeat Password: <Required />
            </Label>
            <Input
              onChange={this.handlePasswordCheck}
              type="password"
              id="registration-verify-password-input"
              name="verify-password"
              required
            />
            <Label htmlFor="registration-email-input">
              Email Address: <Required />
            </Label>
            <Input id="registration-email-input" name="email" required />
          </div>
          <div role="alert">{error && <p className="error">{error}</p>}</div>
          <footer>
            <Button disabled={this.state.isMatch === false} type="submit">
              Register
            </Button>{" "}
            <br />
            <Link to="/login">Already have an account?</Link>
          </footer>
        </form>
      </>
    );
  }
}
