import React from "react";
import { connect } from "react-redux";
import { increment_v2, decrement } from "./actions";

class Counter extends React.Component {
  //state = { count: 0 };

  increment = () => {
    /*
    this.setState({
      count: this.state.count + 1
    });
    */
    this.props.increment_v2();
  };

  decrement = () => {
    /*
    this.setState({
      count: this.state.count - 1
    });
    */

    //this.props.dispatch({ type: "DECREMENT" });
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increment_v2,
  decrement
};

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

//export default Counter;

// With this:
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
