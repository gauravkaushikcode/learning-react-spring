import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: "",
    };
  }
  render() {
    return (
      <div>
        <h1>Welcome! </h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage Todo's{" "}
          <Link to="/todos">here</Link>
        </div>
        <div className="container">
          Click to get custom welcome message
          <button
            className="btn btn-success"
            onClick={this.retrieveWelcomeMessage}
          >
            Get Message
          </button>
        </div>
        <div>{this.state.welcomeMessage}</div>
      </div>
    );
  }
  retrieveWelcomeMessage() {
    console.log("retrieve message clicked");
    HelloWorldService.executeHelloWorldService(this.props.match.params.name)
      .then((response) =>
        this.setState({ welcomeMessage: response.data.message })
      )
      .catch((error) => this.handleError(error));
    //.then((response) => console.log(response))
    //.catch((error) => console.log(error.response));
  }
  handleError(error) {
    let errorMessage = "";
    if (error.message) {
      errorMessage += error.message;
    }
    if (error.response && error.response.data.message) {
      errorMessage += error.response.data.message;
    }
    this.setState({ welcomeMessage: errorMessage });
  }
}
export default Welcome;
