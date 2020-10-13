import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import Welcome from "./Welcome";
import TodoListComponent from "./TodoListComponent";
import TodoComponent from "./TodoComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";

class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login" component={LoginComponent}></Route>
            <AuthenticatedRoute
              path="/logout"
              component={LogoutComponent}
            ></AuthenticatedRoute>
            <AuthenticatedRoute
              path="/welcome/:name"
              component={Welcome}
            ></AuthenticatedRoute>
            <AuthenticatedRoute
              path="/todos/:id"
              component={TodoComponent}
            ></AuthenticatedRoute>
            <AuthenticatedRoute
              path="/todos"
              component={TodoListComponent}
            ></AuthenticatedRoute>
            <Route component={ErrorComponent}></Route>
          </Switch>
          <FooterComponent />
        </Router>
        {/* <LoginComponent />
        <Welcome /> */}
      </div>
    );
  }
}

export default TodoApp;
