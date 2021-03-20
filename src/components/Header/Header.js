import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";
import logo from "./maslool_header.png";

export default class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderAdminLinks() {
    if (this.context.user.admin === true) {
      return (
        <>
          <NavLink
            activeClassName="active_nav"
            className="leftNav"
            to="/add_trail"
          >
            ADD TRAIL
          </NavLink>
          <NavLink
            activeClassName="active_nav"
            className="leftNav"
            to="/messages"
          >
            MESSAGES
          </NavLink>
          <NavLink
            activeClassName="active_nav"
            className="leftNav"
            to="/alerts"
          >
            ALERTS
          </NavLink>
          <NavLink activeClassName="active_nav" className="leftNav" to="/users">
            USERS
          </NavLink>
        </>
      );
    } else {
      return (
        <NavLink activeClassName="active_nav" className="leftNav" to="/contact">
          CONTACT ADMIN
        </NavLink>
      );
    }
  }

  renderAuthorisedLinks() {
    return (
      <div className="authorised_links">
        <NavLink activeClassName="active_nav" className="leftNav" to="/welcome">
          SITE RULES
        </NavLink>
        <NavLink activeClassName="active_nav" className="leftNav" to="/trails">
          TRAILS
        </NavLink>
        {this.renderAdminLinks()}
        <NavLink
          activeClassName="active_nav"
          className="rightNav"
          to="/profile"
        >
          {this.context.user.username}
        </NavLink>
        <Link className="rightNav" onClick={this.handleLogoutClick} to="/home">
          LOGOUT
        </Link>
      </div>
    );
  }

  renderLoginLinks() {
    return (
      <div className="login_links">
        <NavLink activeClassName="active_nav" to="/home">
          HOME
        </NavLink>
        <NavLink activeClassName="active_nav" to="/join">
          REGISTER
        </NavLink>
        <NavLink activeClassName="active_nav" to="/login">
          LOGIN
        </NavLink>
      </div>
    );
  }

  render() {
    return (
      <header>
        <Link
          className="header_logo"
          to={TokenService.hasAuthToken() ? "/trails" : "/home"}
        >
          <img className="logo_image" src={logo} alt="logo of the website" />
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderAuthorisedLinks()
          : this.renderLoginLinks()}
      </header>
    );
  }
}
