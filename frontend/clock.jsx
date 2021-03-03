import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const time = this.state.date.toLocaleTimeString();
    return <h1>{time}</h1>;
  }
}

export default Clock;
