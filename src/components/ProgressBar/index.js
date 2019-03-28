import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

class ProgressBar extends React.Component {
  render() {
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    );
  }
}

export default ProgressBar;
