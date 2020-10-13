import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";
class TodoListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null,
    };
    this.updateTodoRow = this.updateTodoRow.bind(this);
    this.addTodoRow = this.addTodoRow.bind(this);
    this.deleteTodoRow = this.deleteTodoRow.bind(this);
    this.refereshTodos = this.refereshTodos.bind(this);
  }
  componentDidMount() {
    this.refereshTodos();
  }
  refereshTodos() {
    TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUser())
      // .then((response) =>
      //   this.setState({ todos: response.data.message })
      // )
      // .catch((error) =>
      //   this.setState({ todos: error.response.data.message })
      // );
      .then((response) => this.setState({ todos: response.data }))
      .catch((error) => console.log(error.response));
  }
  render() {
    return (
      <div>
        <h1>To Do's List</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description: </th>
                <th>Target Date: </th>
                <th>Is Completed: </th>
                <th>Update: </th>
                <th>Delete: </th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <th>{todo.description}</th>
                  <th>{moment(todo.targetDate).format("YYYY-MM-DD")}</th>
                  <th>{todo.done.toString()}</th>
                  <th>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateTodoRow(todo.id)}
                    >
                      Update
                    </button>
                  </th>
                  <th>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoRow(todo.id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoRow}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  addTodoRow() {
    console.log("create");
    // routing to the component page -> todos/-1
    this.props.history.push("/todos/-1");
  }
  updateTodoRow(id) {
    console.log("update" + id);
    // routing to the component page -> todos/${id}
    this.props.history.push(`/todos/${id}`);

    // TodoDataService.updateTodo(
    //   AuthenticationService.getLoggedInUser(),
    //   id
    // ).then((response) => {
    //   this.setState({ message: `update of todo ${id} successful` });
    //   this.refereshTodos();
    // });
  }
  deleteTodoRow(id) {
    TodoDataService.deleteTodo(
      AuthenticationService.getLoggedInUser(),
      id
    ).then((response) => {
      this.setState({ message: `delete of todo ${id} successful` });
      this.refereshTodos();
    });
  }
}
export default TodoListComponent;
