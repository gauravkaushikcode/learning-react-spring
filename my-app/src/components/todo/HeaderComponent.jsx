import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import AuthenticationService from "./AuthenticationService";

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="www.google.com" className="navbar-brand">
              Welcome
            </a>
          </div>
          {isUserLoggedIn && (
            <ul className="navbar-nav">
              <li>
                <Link to="/welcome/gaurav" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/todos" className="nav-link">
                  Todos
                </Link>
              </li>
            </ul>
          )}
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}
export default withRouter(HeaderComponent);
