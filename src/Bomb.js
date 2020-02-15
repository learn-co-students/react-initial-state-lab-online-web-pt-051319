// your Bomb code here!
import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  tickBoom() {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`;
    } else {
      return "Boom!";
    }
  }

  render() {
    return <div>{this.tickBoom()}</div>;
  }
}
