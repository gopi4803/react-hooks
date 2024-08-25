import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    // this.setState({ count: this.state.count + 1 },()=>{
    //     console.log("call back value", this.state.count)
    // });
    // console.log(this.state.count);
    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      }),
      () => {
        console.log("call back ",this.state.count);
      }
    );
    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default Counter;
