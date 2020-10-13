import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Counter.css";

class CounterButton extends Component {
  // constructor() {
  //   super(); // we must call a super contructor
  //   this.state = {
  //     counter: 0,
  //   };
  //   //b ind this to local method to use it outside the constructor scope.
  //   this.incrementBy = this.incrementBy.bind(this);
  // }
  render() {
    return (
      <div className="counterButton">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          +{this.props.by}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          -{this.props.by}
        </button>
      </div>
    );
  }
  // arrow function prevents the need of binding this in constructor
  // increment = () => {
  //   console.log(`increment from  - ${this.props.by}`);
  //   //update the state => count+1
  //   // call the setState method to update the state
  //   this.setState((prevState) => {
  //     return {
  //       counter: prevState.counter + this.props.by,
  //     };
  //   });
  //   this.props.incrementMethod(this.props.by);
  // };
  // decrement = () => {
  //   console.log(`decrement from  - ${this.props.by}`);
  //   //update the state => count+1
  //   // call the setState method to update the state
  //   this.setState((prevState) => {
  //     return {
  //       counter: prevState.counter - this.props.by,
  //     };
  //   });
  //   this.props.decrementMethod(this.props.by);
  // };
  // reset = () => {
  //   this.setState(() => {
  //     return {
  //       counter: 0,
  //     };
  //   });
  // };
}
CounterButton.defaultProps = {
  by: 1,
};
CounterButton.propTypes = {
  by: PropTypes.number,
};
export default CounterButton;
