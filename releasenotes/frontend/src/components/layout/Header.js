import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

//Contains header elements for the page like the navbar and basic React components. Called in App.js

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      //The links that are displayed in the nav if user is logged in
      <ul className="navbar-nav mr-auto">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <span className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Log out
          </button>
        </span>
      </ul>
    );

    const guestLinks = (
      //The links that are displayed in the nav if user is not logged in
      <ul className="navbar-nav mr-auto">
        <span className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </span>
        <span className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </span>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Release Notes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
