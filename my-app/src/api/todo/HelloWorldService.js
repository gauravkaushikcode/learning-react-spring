import axios from "axios";
class HelloWorldService {
  executeHelloWorldService(name) {
    console.log("service executed");
    // let username = "gaurav";
    // let password = "password";
    // let basicAuth = "Basic " + window.btoa(username + ":" + password);
    return axios.get(
      `http://localhost:8080/hello-world-bean/path/${name}`
      // , {
      //   headers: {
      //     authorization: basicAuth,
      //   },
      // }
    );
  }
}
export default new HelloWorldService();
