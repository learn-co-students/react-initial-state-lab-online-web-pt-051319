// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = { secondsLeft: props.initialCount }
      }

    render () {
        return this.state.secondsLeft === 0? <h4>Boom!</h4> : <h4>{this.state.secondsLeft} seconds left before I go boom!</h4>
    }
}