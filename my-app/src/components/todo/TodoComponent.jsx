import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
      done: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.state.id === -1) {
      return;
    }
    TodoDataService.retrieveTodo(
      AuthenticationService.getLoggedInUser(),
      this.state.id
    ).then((response) =>
      this.setState({
        description: response.data.description,
        targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
        done: response.data.done,
      })
    );
  }
  onSubmit(values) {
    let todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
      done: values.done,
    };
    if (this.state.id === -1) {
      TodoDataService.createTodo(
        AuthenticationService.getLoggedInUser(),
        todo
      ).then(() => {
        this.props.history.push("/todos");
      });
    } else {
      TodoDataService.updateTodo(
        AuthenticationService.getLoggedInUser(),
        this.state.id,
        todo
      ).then(() => {
        this.props.history.push("/todos");
      });
    }
  }
  validate(values) {
    let errors = {};
    if (!values.description) {
      errors.description = "Enter aa Description";
    } else if (values.description.length < 5) {
      errors.description = "Enter atleast 5 characters in Description";
    }
    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid Date";
    }
    return errors;
  }
  render() {
    // destructuring
    let { description, targetDate, done } = this.state;
    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          {/*  if key is same as value we can pass in Formik just once, otherwise
          description:description */}
          <Formik
            initialValues={{ description, targetDate, done }}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={this.onSubmit}
            validate={this.validate}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                ></ErrorMessage>
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                ></ErrorMessage>
                <fieldset className="form-group">
                  <label>Description</label>
                  <Field
                    className="form-control"
                    type="text"
                    name="description"
                  ></Field>
                </fieldset>
                <fieldset className="form-group">
                  <label>Target Date</label>
                  <Field
                    className="form-control"
                    type="date"
                    name="targetDate"
                  ></Field>
                </fieldset>
                <fieldset className="form-group">
                  <label>Status</label>
                  <Field
                    className="form-control"
                    type="boolean"
                    name="done"
                  ></Field>
                </fieldset>
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
export default TodoComponent;
