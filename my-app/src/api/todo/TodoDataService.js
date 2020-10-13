import axios from "axios";
class TodoDataService {
  retrieveAllTodos(name) {
    console.log("retrieve all service executed");
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }
  retrieveTodo(name, id) {
    console.log("retrieve one todo service executed");
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
  }
  updateTodo(name, id, todo) {
    console.log("retrieve one todo service executed");
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }
  createTodo(name, todo) {
    console.log("retrieve one todo service executed");
    return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
  }
  deleteTodo(name, id) {
    console.log("delete service executed");
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }
}
export default new TodoDataService();
