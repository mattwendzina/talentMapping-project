import React from "react";
import Styles from "./staff.module.css";

import Draggable from "../DnD/Draggable";

class Staff extends React.Component {
  render() {
    return (
      <>
        <Draggable userid={this.props.activeStaffUsers.userId}>
          <li key={new Date()} className={Styles.staffLi}>
            {this.props.activeStaffUsers.user}
          </li>
        </Draggable>
      </>
    );
  }
}

export default Staff;
