import React from "react";
import Styles from "./staff.module.css";

import Draggable from "../DnD/Draggable";

class User extends React.Component {
  render() {
    console.log(this.props.title);
    return (
      <>
        {this.props.title === "Staff List" ? (
          <Draggable userid={this.props.activeUsers.userId}>
            <li key={new Date()} className={Styles.staffLi}>
              {this.props.activeUsers.user}
            </li>
          </Draggable>
        ) : (
          <li
            userid={this.props.activeUsers.userId}
            key={new Date()}
            className={Styles.staffLi}
          >
            {this.props.activeUsers.user}
          </li>
        )}
      </>
    );
  }
}

export default User;
