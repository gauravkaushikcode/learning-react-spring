import React, { Component } from "react";
import "./Counter.css";
import CounterButton from "./CounterButton";
class Counter extends Component {
  //define intial state in a constructor
  //state => count=0
  constructor() {
    super(); // we must call a super contructor
    this.state = {
      counter: 0,
    };
    // bind this to local method to use it outside the constructor scope.
    //this.incrementBy = this.incrementBy.bind(this);

    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <CounterButton
          by={1}
          incrementMethod={this.incrementBy}
          decrementMethod={this.decrementBy}
        />
        <CounterButton
          by={5}
          incrementMethod={this.incrementBy}
          decrementMethod={this.decrementBy}
        />
        <CounterButton
          by={10}
          incrementMethod={this.incrementBy}
          decrementMethod={this.decrementBy}
        />
        <span className="counter">{this.state.counter}</span>
        <div>
          <button className="resetButton" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
  // arrow function prevents the need of binding this in constructor
  incrementBy = (by) => {
    console.log(`increment from child - ${by}`);
    //update the state => count+1
    // call the setState method to update the state
    this.setState((prevState) => {
      return {
        counter: prevState.counter + by,
      };
    });
  };
  decrementBy = (by) => {
    console.log(`decrement from child - ${by}`);
    //update the state => count+1
    // call the setState method to update the state
    this.setState((prevState) => {
      return {
        counter: prevState.counter - by,
      };
    });
  };
  reset() {
    this.setState({
      counter: 0,
    });
  }
}
export default Counter;
