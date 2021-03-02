import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    let date = new Date();
    this.time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    this.state = {
      hours: this.time[0],
      minutes: this.time[1],
      seconds: this.time[2],
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    let date = new Date();
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()];

    this.setState(){
      hours: time[0],
      minutes: time[1],
      seconds: time[2],
    }

    setInterval(this.tick(),1000);

    componentDidMount(){
      this.setInterval;
    }

    // ++this.time[2];
    // if (this.time[2] === 60) {
    //   this.time[2] = 0;
    //   ++this.time[1];
    // }
    // if (this.time[1] === 60) {
    //   this.time[1] = 0;
    //   ++this.time[0];
    // }
    // if (this.time[0] === 25) {
    //   this.time[0] = 1;
    // }
  }


  render() {
    return (
      <h1>
        {this.hours}:{this.minutes}:{this.seconds}
      </h1>
    );
  }
}

export default Clock;
