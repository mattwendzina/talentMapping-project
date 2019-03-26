import React from "react";
import Styles from "./Clocks.module.css";

class ClockTimer extends React.Component {
  render() {
    return (
      <div>
        <div className={Styles.clockCont} />
      </div>
    );
  }
}

export default ClockTimer;
