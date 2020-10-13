import axios from "axios";
class AuthenticationService {
  executeBasicAuthenticationService(username, password) {
    return axios.get("http://localhost:8080/basicauth", {
      headers: { authorization: this.createBasicAuthToken(username, password) },
    });
  }
  createBasicAuthToken(username, password) {
    let basicAuth = "Basic " + window.btoa(username + ":" + password);
    return basicAuth;
  }
  registerSuccessfulLogin(username, password) {
    // let basicAuth = "Basic " + window.btoa(username + ":" + password);
    sessionStorage.setItem("authenticatedUser", username);
    this.setUpAxiosInterceptors(this.createBasicAuthToken(username, password));
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }
  isUserLoggedIn() {
    let userSession = sessionStorage.getItem("authenticatedUser");
    if (userSession === null) {
      return null;
    } else {
      return true;
    }
  }
  getLoggedInUser() {
    let userSession = sessionStorage.getItem("authenticatedUser");
    if (userSession === null) {
      return null;
    } else {
      return userSession;
    }
  }
  setUpAxiosInterceptors(basicAuth) {
    axios.interceptors.request.use((config) => {
      if (this.isUserLoggedIn()) config.headers.authorization = basicAuth;
      return config;
    });
  }
}
export default new AuthenticationService();
