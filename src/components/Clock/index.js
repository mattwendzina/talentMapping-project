import React from "react";
import Styles from "./Clocks.module.css";
import Clock from "react-clock";

class ClockTimer extends React.Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div>
        <div className={Styles.clockCont}>
          <Clock className={Styles.clock} value={this.state.date} />
        </div>
      </div>
    );
  }
}

export default ClockTimer;
