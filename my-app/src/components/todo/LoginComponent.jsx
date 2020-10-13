import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "gaurav",
      password: "",
      hasLoginFailed: false,
      showSuccesMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }
  render() {
    return (
      <div>
        <div className="container">
          {/* <ShowInvalidCredentials
            hasLoginFailed={this.state.hasLoginFailed}
            showSuccesMessage={this.state.showSuccesMessage}
          /> */}
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid Attempt</div>
          )}
          {/* {this.state.showSuccesMessage && <div>Login Success</div>} */}
        </div>
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="btn btn-success" onClick={this.loginClicked}>
          Login
        </button>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  loginClicked() {
    if (this.state.username === "gaurav" && this.state.password === "test") {
      AuthenticationService.registerSuccessfulLogin(this.state.username);
      this.props.history.push(`/welcome/${this.state.username}`);
      this.setState({
        hasLoginFailed: false,
        showSuccesMessage: true,
      });
    } else {
      this.setState({
        hasLoginFailed: true,
        showSuccesMessage: false,
      });
    }
    // AuthenticationService.executeBasicAuthenticationService(
    //   this.state.username,
    //   this.state.password
    // )
    //   .then(() => {
    //     AuthenticationService.registerSuccessfulLogin(this.state.username);
    //     this.props.history.push(`/welcome/${this.state.username}`);
    //   })
    //   .catch(() => {
    //     this.setState({
    //       hasLoginFailed: true,
    //       showSuccesMessage: false,
    //     });
    //   });
  }
}
// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return (
//       <div>
//         <span>Invalid Attempt</span>
//       </div>
//     );
//   } else if (props.showSuccesMessage) {
//     return (
//       <div>
//         <span>Login Success</span>
//       </div>
//     );
//   }
//   return null;
// }
export default LoginComponent;
