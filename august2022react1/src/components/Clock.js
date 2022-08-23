import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriberId: null,
      time: new Date(),
    };
  }

  render() {
    const { state } = this;
    const { time } = state;
    return <div onClick={this.tick}
    >{`The time is: ${time.toLocaleTimeString()}`}</div>;
  }

  componentDidMount() {
    const intervalSubscriberId = setInterval(this.tick, 10);
    this.setState({ subscriberId: intervalSubscriberId });
  }

  componentWillUnmount() {
    const { state } = this;
    const { subscriberId } = state;
    clearInterval(subscriberId);
  }

  tick = () => {
    this.setState({ time: new Date() });
  };
}

export default Clock;
