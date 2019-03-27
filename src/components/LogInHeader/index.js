import React from "react";

import Styles from "./LogInHeader.module.css";

class LogInHeader extends React.Component {
  render() {
    return (
      <div className={Styles.headerCont}>
        <div className={Styles.headerRight} />
      </div>
    );
  }
}

export default LogInHeader;
